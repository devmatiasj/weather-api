import { ConfigService } from '@nestjs/config';
import { LocationService } from '../Location/location.service';
import { HttpService } from '../../shared/http/http.service';
import { WeatherMapper } from '../../mappers/weather.mapper';
import { CurrentWeatherDto, ForecastWeatherDto } from '../../dtos/weather.dto';
export declare class WeatherService {
    private configService;
    private locationService;
    private httpService;
    private weatherMapper;
    private readonly baseUrl;
    private readonly apiKey;
    constructor(configService: ConfigService, locationService: LocationService, httpService: HttpService, weatherMapper: WeatherMapper);
    getCurrentWeather(city?: string): Promise<CurrentWeatherDto>;
    getWeatherForecast(city?: string): Promise<ForecastWeatherDto>;
}
