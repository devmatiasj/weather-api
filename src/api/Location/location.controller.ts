import { Controller, Get, Req } from '@nestjs/common';
import { LocationService } from './location.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


@ApiTags('Location')
@Controller('v1/location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @ApiOperation({ summary: 'Get current location' })
  @ApiResponse({ status: 200, description: 'The current location' })
  @Get()
  async getLocation(): Promise<any> {
    const ip = await this.locationService.getIp();
    return this.locationService.getLocation(ip);
  } 
}