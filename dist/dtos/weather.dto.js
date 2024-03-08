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
exports.ForecastItemDto = exports.ForecastWeatherDto = exports.CurrentWeatherDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CurrentWeatherDto {
}
exports.CurrentWeatherDto = CurrentWeatherDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], CurrentWeatherDto.prototype, "coord", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Object] }),
    __metadata("design:type", Array)
], CurrentWeatherDto.prototype, "weather", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CurrentWeatherDto.prototype, "base", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], CurrentWeatherDto.prototype, "main", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CurrentWeatherDto.prototype, "visibility", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], CurrentWeatherDto.prototype, "wind", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], CurrentWeatherDto.prototype, "clouds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CurrentWeatherDto.prototype, "dt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], CurrentWeatherDto.prototype, "sys", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CurrentWeatherDto.prototype, "timezone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CurrentWeatherDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CurrentWeatherDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CurrentWeatherDto.prototype, "cod", void 0);
class ForecastWeatherDto {
}
exports.ForecastWeatherDto = ForecastWeatherDto;
class ForecastItemDto {
}
exports.ForecastItemDto = ForecastItemDto;
//# sourceMappingURL=weather.dto.js.map