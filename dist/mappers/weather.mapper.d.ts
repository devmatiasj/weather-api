import { CurrentWeather } from '../models/weather.model';
import { CurrentWeatherDto, ForecastWeatherDto } from '../dtos/weather.dto';
import { ForecastWeather } from '../models/weather.model';
export declare class WeatherMapper {
    mapCurrentWeatherToDto(currentWeather: CurrentWeather): CurrentWeatherDto;
    mapForecastWeatherToDto(forecast: ForecastWeather): ForecastWeatherDto;
    private mapForecastItemToDto;
}
