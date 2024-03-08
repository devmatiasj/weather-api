import { Test, TestingModule } from '@nestjs/testing';
import { HttpException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WeatherService } from '../../api/Weather/weather.service';
import { LocationService } from '../../api/Location/location.service';
import { HttpService } from '../../shared/http/http.service';
import { mockCurrentWeather, mockForecastWeather } from '../mocks/weather.mocks';
import { mockLocation } from '../mocks/location.mocks';
import { LocationMapper } from '../../mappers/location.mapper';
import { WeatherMapper } from '../../mappers/weather.mapper';

describe('WeatherService', () => {
  let weatherService: WeatherService;
  let locationService: LocationService;
  let httpService: HttpService;
  let configService: ConfigService;

  const configServiceMock = {
    get: jest.fn().mockImplementation((key: string) => {
      if (key === 'OPEN_WEATHER_API_KEY') {
        return 'fake-api-key';
      } else if (key === 'OPEN_WEATHER_BASE_URL') {
        return 'http://example.com/api';
      } else if (key === 'IP_API_BASE_URL') {
        return 'http://exampleipapi.com/api';
      } else if (key === 'IPIFY_BASE_URL') {
        return 'http://exampleipify.com/api';
      }
    }),
  };

  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WeatherService,
        LocationService,
        HttpService,
        LocationMapper,
        WeatherMapper,
        { provide: ConfigService, useValue: configServiceMock }],
    }).compile();

    weatherService = module.get<WeatherService>(WeatherService);
    locationService = module.get<LocationService>(LocationService);
    httpService = module.get<HttpService>(HttpService);
    configService = module.get<ConfigService>(ConfigService);

    // Mock ConfigService methods
    jest.spyOn(configService, 'get').mockImplementation(key => {
      if (key === 'OPEN_WEATHER_API_KEY') {
        return 'fake-api-key';
      } else if (key === 'OPEN_WEATHER_BASE_URL') {
        return 'http://example.com/api';
      } else if (key === 'IP_API_BASE_URL') {
        return 'http://exampleipapi.com/api';
      } else if (key === 'IPIFY_BASE_URL') {
        return 'http://exampleipify.com/api';
      }
    });
    jest.spyOn(locationService, 'getIp').mockResolvedValue('fake-ip');
    jest.spyOn(locationService, 'getLocation').mockResolvedValue(mockLocation);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(weatherService).toBeDefined();
  });

  it('getCurrentWeather should return current weather data', async () => {
    jest.spyOn(httpService, 'get').mockResolvedValue({ data: mockCurrentWeather });
  
    const weather = await weatherService.getCurrentWeather('Cordoba');
  
    expect(weather).toEqual(mockCurrentWeather);
    expect(httpService.get).toHaveBeenCalledWith('http://example.com/api/weather?q=Cordoba&appid=fake-api-key');
  });

  it('getWeatherForecast should return weather forecast data', async () => {
    jest.spyOn(httpService, 'get').mockResolvedValue({ data: mockForecastWeather });

    const forecast = await weatherService.getWeatherForecast();

    expect(forecast).toEqual(mockForecastWeather);
    expect(httpService.get).toHaveBeenCalledWith('http://example.com/api/forecast?q=Cordoba&appid=fake-api-key');
  });

  it('getCurrentWeather should throw HttpException if HTTP request fails', async () => {
    jest.spyOn(httpService, 'get').mockRejectedValue(new Error('Failed to fetch'));

    await expect(weatherService.getCurrentWeather()).rejects.toThrowError(HttpException);
  });

  it('getWeatherForecast should throw HttpException if HTTP request fails', async () => {
    jest.spyOn(httpService, 'get').mockRejectedValue(new Error('Failed to fetch'));

    await expect(weatherService.getWeatherForecast()).rejects.toThrowError(HttpException);
  });
});