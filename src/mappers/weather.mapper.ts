import { Injectable } from '@nestjs/common';
import { CurrentWeather } from '../models/weather.model';
import { CurrentWeatherDto, ForecastWeatherDto } from '../dtos/weather.dto';
import { ForecastWeather } from '../models/weather.model';

@Injectable()
export class WeatherMapper {
  mapCurrentWeatherToDto(currentWeather: CurrentWeather): CurrentWeatherDto {
    return {
      coord: currentWeather.coord,
      weather: currentWeather.weather,
      base: currentWeather.base,
      main: currentWeather.main,
      visibility: currentWeather.visibility,
      wind: currentWeather.wind,
      clouds: currentWeather.clouds,
      dt: currentWeather.dt,
      sys: currentWeather.sys,
      timezone: currentWeather.timezone,
      id: currentWeather.id,
      name: currentWeather.name,
      cod: currentWeather.cod,
    };
  }

  mapForecastWeatherToDto(forecast: ForecastWeather): ForecastWeatherDto {
    return {
      cod: forecast.cod,
      message: forecast.message,
      cnt: forecast.cnt,
      list: forecast.list.map(item => this.mapForecastItemToDto(item)),
      city: forecast.city,
    };
  }

  private mapForecastItemToDto(item: any): any {
    return {
      dt: item.dt,
      main: item.main,
      weather: item.weather,
      clouds: item.clouds,
      wind: item.wind,
      visibility: item.visibility,
      pop: item.pop,
      sys: item.sys,
      dt_txt: item.dt_txt,
    };
  }
}