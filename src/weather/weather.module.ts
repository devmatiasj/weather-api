import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { LocationModule } from '../Location/location.module'; 
import { LocationService } from '../Location/location.service';
import { HttpService } from '../shared/http/http.service';

@Module({
  imports: [LocationModule],
  controllers: [WeatherController],
  providers: [WeatherService, LocationService, HttpService],
})
export class WeatherModule {}