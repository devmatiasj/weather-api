import { WeatherService } from './weather.service';
export declare class WeatherController {
    private weatherService;
    constructor(weatherService: WeatherService);
    getCurrentWeather(city?: string): Promise<any>;
    getWeatherForecast(city?: string): Promise<any>;
}
