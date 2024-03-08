import { Injectable } from '@nestjs/common';
import { Location } from '../models/location.model';
import { LocationDto } from '../dtos/location.dto';

@Injectable()
export class LocationMapper {
  mapToDto(location: Location): LocationDto {
    return {
      country: location.country,
      countryCode: location.countryCode,
      region: location.region,
      regionName: location.regionName,
      city: location.city,
      zip: location.zip,
      lat: location.lat,
      lon: location.lon,
      timezone: location.timezone,
      isp: location.isp,
      org: location.org,
      as: location.as,
      query: location.query,
    };
  }
}