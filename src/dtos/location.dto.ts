import { ApiProperty } from '@nestjs/swagger';

export class LocationDto {
  @ApiProperty()
  country: string;

  @ApiProperty()
  countryCode: string;

  @ApiProperty()
  region: string;

  @ApiProperty()
  regionName: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  zip: string;

  @ApiProperty()
  lat: number;

  @ApiProperty()
  lon: number;

  @ApiProperty()
  timezone: string;

  @ApiProperty()
  isp: string;

  @ApiProperty()
  org: string;

  @ApiProperty()
  as: string;

  @ApiProperty()
  query: string;
}