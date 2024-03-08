import { Injectable } from '@nestjs/common';
import { HttpService } from '../../shared/http/http.service';
import { ConfigService } from '@nestjs/config';
import { LocationMapper } from '../../mappers/location.mapper';
import { LocationDto } from 'src/dtos/location.dto';


@Injectable()

export class LocationService {
  private readonly ipapiUrlBase: string;
  private readonly ipifyUrlBase: string;

  constructor(private configService: ConfigService, private httpService: HttpService, private locationMapper: LocationMapper){
    this.ipapiUrlBase = this.configService.get('IP_API_BASE_URL');
    this.ipifyUrlBase = this.configService.get('IPIFY_BASE_URL');
  }
  
  async getLocation(ip: string): Promise<LocationDto> {
    const url = `${this.ipapiUrlBase}/${ip}`;
    try {
      const response = await this.httpService.get(url);
      return this.locationMapper.mapToDto(response.data);
    } catch (error) {
      throw new Error('Failed to fetch location');
    }
  }

  async getIp(): Promise<string> {
    try {
      const response = await this.httpService.get(this.ipifyUrlBase);
      return response.data.ip;
    } catch (error) {
      throw new Error('Failed to fetch IP');
    }
  }
}
