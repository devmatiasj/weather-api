import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { LocationModule } from '../location/location.module'; 
import { LocationService } from 'src/location/location.service';
@Module({
  imports: [LocationModule],
  controllers: [WeatherController],
  providers: [WeatherService, LocationService],
})
export class WeatherModule {}