import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { WeatherController } from '../../Weather/weather.controller';
import { WeatherService } from '../../Weather/weather.service';
import { HttpService } from '../../shared/http/http.service';
import { ConfigService } from '@nestjs/config';
import { LocationService } from '../../Location/location.service';

describe('WeatherController (e2e)', () => {
  let app: INestApplication;
  let weatherService: WeatherService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [WeatherController],
      providers: [WeatherService, ConfigService, HttpService, LocationService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    weatherService = moduleFixture.get<WeatherService>(WeatherService);
  });

  it('/GET v1/weather/current (getCurrentWeather) without city parameter', async () => {
    // Mock the weather service response
    const mockWeatherData = { temperature: 25, description: 'Sunny' };
    jest.spyOn(weatherService, 'getCurrentWeather').mockResolvedValue(mockWeatherData);

    // Make a request to the endpoint without city parameter
    const res = await request(app.getHttpServer())
      .get('/v1/weather/current')
      .expect(200);

    // Assert the response matches the expected weather data
    expect(res.body).toEqual(mockWeatherData);
  });

  it('/GET v1/weather/current (getCurrentWeather) with city parameter', async () => {
    // Mock the weather service response
    const mockWeatherData = { temperature: 20, description: 'Cloudy' };
    jest.spyOn(weatherService, 'getCurrentWeather').mockResolvedValue(mockWeatherData);

    // Make a request to the endpoint with city parameter
    const cityName = 'New York';
    const res = await request(app.getHttpServer())
      .get(`/v1/weather/current?city=${cityName}`)
      .expect(200);

    // Assert the response matches the expected weather data
    expect(res.body).toEqual(mockWeatherData);
  });

  it('/GET v1/weather/forecast (getWeatherForecast) without city parameter', async () => {
    // Mock the weather service response
    const mockForecastData = [{ temperature: 25, description: 'Sunny' }, { temperature: 20, description: 'Cloudy' }];
    jest.spyOn(weatherService, 'getWeatherForecast').mockResolvedValue(mockForecastData);

    // Make a request to the endpoint without city parameter
    const res = await request(app.getHttpServer())
      .get('/v1/weather/forecast')
      .expect(200);

    // Assert the response matches the expected forecast data
    expect(res.body).toEqual(mockForecastData);
  });

  it('/GET v1/weather/forecast (getWeatherForecast) with city parameter', async () => {
    // Mock the weather service response
    const mockForecastData = [{ temperature: 22, description: 'Rainy' }, { temperature: 18, description: 'Partly cloudy' }];
    jest.spyOn(weatherService, 'getWeatherForecast').mockResolvedValue(mockForecastData);

    // Make a request to the endpoint with city parameter
    const cityName = 'London';
    const res = await request(app.getHttpServer())
      .get(`/v1/weather/forecast?city=${cityName}`)
      .expect(200);

    // Assert the response matches the expected forecast data
    expect(res.body).toEqual(mockForecastData);
  });

  afterAll(async () => {
    await app.close();
  });
});