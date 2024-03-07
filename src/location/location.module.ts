import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { HttpService } from 'src/shared/http/http.service';


@Module({
  controllers: [LocationController],
  providers: [LocationService, HttpService],
})

export class LocationModule {}