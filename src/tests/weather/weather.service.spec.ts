import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WeatherService } from '../../Weather/weather.service';
import { LocationService } from '../../Location/location.service';
import { HttpService } from '../../shared/http/http.service';

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
      }
    }),
  };

  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WeatherService,
        LocationService,
        HttpService,
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

    // Mock LocationService methods
    jest.spyOn(locationService, 'getIp').mockResolvedValue('fake-ip');
    jest.spyOn(locationService, 'getLocation').mockResolvedValue({ city: 'Cordoba' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(weatherService).toBeDefined();
  });

  it('getCurrentWeather should return current weather data', async () => {
    const mockWeatherData = { temperature: 25, humidity: 60 };
    jest.spyOn(httpService, 'get').mockResolvedValue({ data: mockWeatherData });
  
    const weather = await weatherService.getCurrentWeather('Cordoba');
  
    expect(weather).toEqual(mockWeatherData);
    expect(httpService.get).toHaveBeenCalledWith('http://example.com/api/weather?q=Cordoba&appid=fake-api-key');
  });

  it('getWeatherForecast should return weather forecast data', async () => {
    const mockForecastData = [{ date: '2024-03-07', temperature: 22 }, { date: '2024-03-08', temperature: 24 }];
    jest.spyOn(httpService, 'get').mockResolvedValue({ data: mockForecastData });

    const forecast = await weatherService.getWeatherForecast();

    expect(forecast).toEqual(mockForecastData);
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