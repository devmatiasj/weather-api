"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const http_service_1 = require("../shared/http/http.service");
const config_1 = require("@nestjs/config");
let LocationService = class LocationService {
    constructor(configService, httpService) {
        this.configService = configService;
        this.httpService = httpService;
        this.ipapiUrlBase = this.configService.get('IP_API_BASE_URL');
        this.ipifyUrlBase = this.configService.get('IPIFY_BASE_URL');
    }
    async getLocation(ip) {
        const url = `${this.ipapiUrlBase}/${ip}`;
        try {
            const response = await this.httpService.get(url);
            return response.data;
        }
        catch (error) {
            throw new Error('Failed to fetch location');
        }
    }
    async getIp() {
        try {
            const response = await this.httpService.get(this.ipifyUrlBase);
            return response.data.ip;
        }
        catch (error) {
            throw new Error('Failed to fetch IP');
        }
    }
};
exports.LocationService = LocationService;
exports.LocationService = LocationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService, http_service_1.HttpService])
], LocationService);
//# sourceMappingURL=location.service.js.map