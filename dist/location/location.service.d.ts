import { HttpService } from '../shared/http/http.service';
import { ConfigService } from '@nestjs/config';
export declare class LocationService {
    private configService;
    private httpService;
    private readonly ipapiUrlBase;
    private readonly ipifyUrlBase;
    constructor(configService: ConfigService, httpService: HttpService);
    getLocation(ip: string): Promise<any>;
    getIp(): Promise<string>;
}
