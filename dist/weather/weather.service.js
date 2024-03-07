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
exports.WeatherService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const location_service_1 = require("../Location/location.service");
const http_service_1 = require("../shared/http/http.service");
let WeatherService = class WeatherService {
    constructor(configService, locationService, httpService) {
        this.configService = configService;
        this.locationService = locationService;
        this.httpService = httpService;
        this.apiKey = this.configService.get('OPEN_WEATHER_API_KEY');
        this.baseUrl = this.configService.get('OPEN_WEATHER_BASE_URL');
    }
    async getCurrentWeather(city) {
        try {
            if (!city) {
                const ip = await this.locationService.getIp();
                city = (await this.locationService.getLocation(ip)).city;
            }
            const location = city;
            const response = await this.httpService.get(`${this.baseUrl}/weather?q=${location}&appid=${this.apiKey}`);
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to get current weather', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getWeatherForecast(city) {
        try {
            if (!city) {
                const ip = await this.locationService.getIp();
                city = (await this.locationService.getLocation(ip)).city;
            }
            const location = city;
            const response = await this.httpService.get(`${this.baseUrl}/forecast?q=${location}&appid=${this.apiKey}`);
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to get weather forecast', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.WeatherService = WeatherService;
exports.WeatherService = WeatherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService, location_service_1.LocationService, http_service_1.HttpService])
], WeatherService);
//# sourceMappingURL=weather.service.js.map