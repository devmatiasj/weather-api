import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { WeatherController } from '../../api/Weather/weather.controller';
import { WeatherService } from '../../api/Weather/weather.service';
import { HttpService } from '../../shared/http/http.service';
import { ConfigService } from '@nestjs/config';
import { LocationService } from '../../api/Location/location.service';
import { mockCurrentWeather, mockForecastWeather } from '../mocks/weather.mocks';
import { LocationMapper } from '../../mappers/location.mapper';
import { WeatherMapper } from '../../mappers/weather.mapper';

describe('WeatherController (e2e)', () => {
  let app: INestApplication;
  let weatherService: WeatherService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [WeatherController],
      providers: [WeatherService, ConfigService, HttpService, LocationService, LocationMapper, WeatherMapper],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    weatherService = moduleFixture.get<WeatherService>(WeatherService);
  });

  it('/GET v1/weather/current (getCurrentWeather) without city parameter', async () => {
    jest.spyOn(weatherService, 'getCurrentWeather').mockResolvedValue(mockCurrentWeather);
    const res = await request(app.getHttpServer())
      .get('/v1/weather/current')
      .expect(200);

    expect(res.body).toEqual(mockCurrentWeather);
  });

  it('/GET v1/weather/current (getCurrentWeather) with city parameter', async () => {
    jest.spyOn(weatherService, 'getCurrentWeather').mockResolvedValue(mockCurrentWeather);
    const cityName = 'New York';
    const res = await request(app.getHttpServer())
      .get(`/v1/weather/current?city=${cityName}`)
      .expect(200);

    expect(res.body).toEqual(mockCurrentWeather);
  });

  it('/GET v1/weather/forecast (getWeatherForecast) without city parameter', async () => {
    jest.spyOn(weatherService, 'getWeatherForecast').mockResolvedValue(mockForecastWeather);
    const res = await request(app.getHttpServer())
      .get('/v1/weather/forecast')
      .expect(200);

    expect(res.body).toEqual(mockForecastWeather);
  });

  it('/GET v1/weather/forecast (getWeatherForecast) with city parameter', async () => {
    jest.spyOn(weatherService, 'getWeatherForecast').mockResolvedValue(mockForecastWeather);
    const cityName = 'London';
    const res = await request(app.getHttpServer())
      .get(`/v1/weather/forecast?city=${cityName}`)
      .expect(200);

    expect(res.body).toEqual(mockForecastWeather);
  });

  afterAll(async () => {
    await app.close();
  });
});