import { LocationService } from './location.service';
export declare class LocationController {
    private locationService;
    constructor(locationService: LocationService);
    getLocation(): Promise<any>;
}
