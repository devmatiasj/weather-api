import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { LocationService } from '../location/location.service';

@Injectable()
export class WeatherService {
  constructor(private configService: ConfigService, private locationService: LocationService) {}

  async getCurrentWeather(city?: string): Promise<any> {
    try {
      if (!city) {
        const ip = await this.locationService.getIp();
        city = (await this.locationService.getLocation(ip)).city;
      }
      const location = city;
      const apiKey = this.configService.get('OPEN_WEATHER_API_KEY');
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
      return response.data;
    } catch (error) {
      throw new HttpException('Failed to get current weather', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getWeatherForecast(city?: string): Promise<any> {
    try {
      if (!city) {
        const ip = await this.locationService.getIp();
        city = (await this.locationService.getLocation(ip)).city;
      }
      const location = city;
      const apiKey = this.configService.get('OPEN_WEATHER_API_KEY');
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`);
      return response.data;
    } catch (error) {
      throw new HttpException('Failed to get weather forecast', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}