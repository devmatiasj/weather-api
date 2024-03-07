import { ConfigService } from '@nestjs/config';
import { LocationService } from '../Location/location.service';
import { HttpService } from '../shared/http/http.service';
export declare class WeatherService {
    private configService;
    private locationService;
    private httpService;
    private readonly baseUrl;
    private readonly apiKey;
    constructor(configService: ConfigService, locationService: LocationService, httpService: HttpService);
    getCurrentWeather(city?: string): Promise<any>;
    getWeatherForecast(city?: string): Promise<any>;
}
