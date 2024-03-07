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
const axios_1 = require("axios");
const location_service_1 = require("../location/location.service");
let WeatherService = class WeatherService {
    constructor(configService, locationService) {
        this.configService = configService;
        this.locationService = locationService;
    }
    async getCurrentWeather(city) {
        try {
            if (!city) {
                const ip = await this.locationService.getIp();
                city = (await this.locationService.getLocation(ip)).city;
            }
            const location = city;
            const apiKey = this.configService.get('OPEN_WEATHER_API_KEY');
            const response = await axios_1.default.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
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
            const apiKey = this.configService.get('OPEN_WEATHER_API_KEY');
            const response = await axios_1.default.get(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`);
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
    __metadata("design:paramtypes", [config_1.ConfigService, location_service_1.LocationService])
], WeatherService);
//# sourceMappingURL=weather.service.js.map