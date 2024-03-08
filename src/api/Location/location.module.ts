import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { HttpService } from '../../shared/http/http.service';
import { LocationMapper } from 'src/mappers/location.mapper';


@Module({
  controllers: [LocationController],
  providers: [LocationService, HttpService, LocationMapper],
})

export class LocationModule {}