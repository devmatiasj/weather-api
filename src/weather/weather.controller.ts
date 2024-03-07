import { Controller, Get, Param, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiProperty } from '@nestjs/swagger';

class WeatherParams {
  @ApiProperty({ required: false }) 
  city?: string;
}

@ApiTags('Weather')
@Controller('v1/weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @ApiOperation({ summary: 'Get weather by city or current location by default' })
  @ApiResponse({ status: 200, description: 'The weather information of the city' })
  @Get('current')
  async getCurrentWeather(@Query() params: WeatherParams): Promise<any> {
    return await this.weatherService.getCurrentWeather(params.city);
  }

  @ApiOperation({ summary: 'Get weather for next 5 days by city or current location by default' })
  @ApiResponse({ status: 200, description: 'The weather information for the next 5 days of the city' })
  @Get('forecast')
  async getWeatherForecast(@Query() params: WeatherParams): Promise<any> {
    return await this.weatherService.getWeatherForecast(params.city);
  }
}