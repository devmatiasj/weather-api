import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { WeatherService } from '../../Weather/weather.service';
import { LocationService } from '../../Location/location.service';


jest.mock('axios');

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WeatherService,
        {
          provide: ConfigService,
          useValue: { get: jest.fn(() => 'fake-api-key') },
        },
        {
          provide: LocationService,
          useValue: {
            getLocation: jest.fn(),
            getIp: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<WeatherService>(WeatherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('getCurrentWeather should return current weather data', async () => {
    const mockWeatherData = { temperature: 25, humidity: 60 };
    (axios.get as jest.Mock).mockResolvedValue({ data: mockWeatherData });

    const weather = await service.getCurrentWeather('New York');

    expect(weather).toEqual(mockWeatherData);
  });

  it('getWeatherForecast should return weather forecast data', async () => {
    const mockForecastData = [{ date: '2024-03-07', temperature: 22 }, { date: '2024-03-08', temperature: 24 }];
    (axios.get as jest.Mock).mockResolvedValue({ data: mockForecastData });

    const forecast = await service.getWeatherForecast('New York');

    expect(forecast).toEqual(mockForecastData);
  });
});