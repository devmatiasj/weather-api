import { ConfigService } from '@nestjs/config';
import { LocationService } from 'src/location/location.service';
export declare class WeatherService {
    private configService;
    private locationService;
    constructor(configService: ConfigService, locationService: LocationService);
    getCurrentWeather(city?: string): Promise<any>;
    getWeatherForecast(city?: string): Promise<any>;
}
