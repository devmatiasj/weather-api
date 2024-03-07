import { Controller, Get, Param, Req } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


@ApiTags('Weather')
@Controller('v1/weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @ApiOperation({ summary: 'Get weather by city or current location by default' })
  @ApiResponse({ status: 200, description: 'The weather information of the city' })
  @Get('current/:city?')
  async getCurrentWeather(@Param('city') city?: string): Promise<any> {
    return await this.weatherService.getCurrentWeather(city);
  }

  @ApiOperation({ summary: 'Get weather for next 5 days by city or current location by default' })
  @ApiResponse({ status: 200, description: 'The weather information for the next 5 days of the city' })
  @Get('forecast/:city?')
  async getWeatherForecast(@Param('city') city?: string): Promise<any> {
    return await this.weatherService.getWeatherForecast(city);
  }
}