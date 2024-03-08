import { WeatherService } from './weather.service';
declare class WeatherParams {
    city?: string;
}
export declare class WeatherController {
    private weatherService;
    constructor(weatherService: WeatherService);
    getCurrentWeather(params: WeatherParams): Promise<any>;
    getWeatherForecast(params: WeatherParams): Promise<any>;
}
export {};
