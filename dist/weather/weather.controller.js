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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherController = void 0;
const common_1 = require("@nestjs/common");
const weather_service_1 = require("./weather.service");
const swagger_1 = require("@nestjs/swagger");
let WeatherController = class WeatherController {
    constructor(weatherService) {
        this.weatherService = weatherService;
    }
    async getCurrentWeather(city) {
        return await this.weatherService.getCurrentWeather(city);
    }
    async getWeatherForecast(city) {
        return await this.weatherService.getWeatherForecast(city);
    }
};
exports.WeatherController = WeatherController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get weather by city or current location by default' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The weather information of the city' }),
    (0, common_1.Get)('current/:city?'),
    __param(0, (0, common_1.Param)('city')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WeatherController.prototype, "getCurrentWeather", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get weather for next 5 days by city or current location by default' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The weather information for the next 5 days of the city' }),
    (0, common_1.Get)('forecast/:city?'),
    __param(0, (0, common_1.Param)('city')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WeatherController.prototype, "getWeatherForecast", null);
exports.WeatherController = WeatherController = __decorate([
    (0, swagger_1.ApiTags)('Weather'),
    (0, common_1.Controller)('v1/weather'),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], WeatherController);
//# sourceMappingURL=weather.controller.js.map