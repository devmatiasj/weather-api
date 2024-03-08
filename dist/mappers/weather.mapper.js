"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherMapper = void 0;
const common_1 = require("@nestjs/common");
let WeatherMapper = class WeatherMapper {
    mapCurrentWeatherToDto(currentWeather) {
        return {
            coord: currentWeather.coord,
            weather: currentWeather.weather,
            base: currentWeather.base,
            main: currentWeather.main,
            visibility: currentWeather.visibility,
            wind: currentWeather.wind,
            clouds: currentWeather.clouds,
            dt: currentWeather.dt,
            sys: currentWeather.sys,
            timezone: currentWeather.timezone,
            id: currentWeather.id,
            name: currentWeather.name,
            cod: currentWeather.cod,
        };
    }
    mapForecastWeatherToDto(forecast) {
        return {
            cod: forecast.cod,
            message: forecast.message,
            cnt: forecast.cnt,
            list: forecast.list.map(item => this.mapForecastItemToDto(item)),
            city: forecast.city,
        };
    }
    mapForecastItemToDto(item) {
        return {
            dt: item.dt,
            main: item.main,
            weather: item.weather,
            clouds: item.clouds,
            wind: item.wind,
            visibility: item.visibility,
            pop: item.pop,
            sys: item.sys,
            dt_txt: item.dt_txt,
        };
    }
};
exports.WeatherMapper = WeatherMapper;
exports.WeatherMapper = WeatherMapper = __decorate([
    (0, common_1.Injectable)()
], WeatherMapper);
//# sourceMappingURL=weather.mapper.js.map