import { HttpService } from '../../shared/http/http.service';
import { ConfigService } from '@nestjs/config';
import { LocationMapper } from '../../mappers/location.mapper';
import { LocationDto } from 'src/dtos/location.dto';
export declare class LocationService {
    private configService;
    private httpService;
    private locationMapper;
    private readonly ipapiUrlBase;
    private readonly ipifyUrlBase;
    constructor(configService: ConfigService, httpService: HttpService, locationMapper: LocationMapper);
    getLocation(ip: string): Promise<LocationDto>;
    getIp(): Promise<string>;
}
