"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationMapper = void 0;
const common_1 = require("@nestjs/common");
let LocationMapper = class LocationMapper {
    mapToDto(location) {
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
};
exports.LocationMapper = LocationMapper;
exports.LocationMapper = LocationMapper = __decorate([
    (0, common_1.Injectable)()
], LocationMapper);
//# sourceMappingURL=location.mapper.js.map