import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LocationService } from '../Location/location.service';
import { HttpService } from '../../shared/http/http.service';
import {WeatherMapper} from '../../mappers/weather.mapper';
import { CurrentWeatherDto, ForecastWeatherDto } from '../../dtos/weather.dto';

@Injectable()
export class WeatherService {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(
    private configService: ConfigService,
    private locationService: LocationService, 
    private httpService: HttpService, 
    private weatherMapper: WeatherMapper
  ) {
    this.apiKey = this.configService.get('OPEN_WEATHER_API_KEY');
    this.baseUrl = this.configService.get('OPEN_WEATHER_BASE_URL');
  }

  async getCurrentWeather(city?: string): Promise<CurrentWeatherDto> {
    try {
      if (!city) {
        const ip = await this.locationService.getIp();
        city = (await this.locationService.getLocation(ip)).city;
      }
      const location = city;
      const response = await this.httpService.get(`${this.baseUrl}/weather?q=${location}&appid=${this.apiKey}`);
      return this.weatherMapper.mapCurrentWeatherToDto(response.data);
    } catch (error) {
      throw new HttpException('Failed to get current weather', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getWeatherForecast(city?: string): Promise<ForecastWeatherDto> {
    try {
      if (!city) {
        const ip = await this.locationService.getIp();
        city = (await this.locationService.getLocation(ip)).city;
      }
      const location = city;
      const response = await this.httpService.get(`${this.baseUrl}/forecast?q=${location}&appid=${this.apiKey}`);
      return this.weatherMapper.mapForecastWeatherToDto(response.data);
    } catch (error) {
      throw new HttpException('Failed to get weather forecast', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}