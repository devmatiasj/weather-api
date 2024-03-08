import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { LocationModule } from '../Location/location.module'; 
import { LocationService } from '../Location/location.service';
import { HttpService } from '../../shared/http/http.service';
import { WeatherMapper } from 'src/mappers/weather.mapper';
import { LocationMapper } from 'src/mappers/location.mapper';

@Module({
  imports: [LocationModule],
  controllers: [WeatherController],
  providers: [WeatherService, LocationService, HttpService, WeatherMapper, LocationMapper],
})
export class WeatherModule {}