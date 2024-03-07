"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let LocationService = class LocationService {
    async getLocation(ip) {
        const url = `http://ip-api.com/json/${ip}`;
        try {
            const response = await axios_1.default.get(url);
            return response.data;
        }
        catch (error) {
            throw new Error('Failed to fetch location');
        }
    }
    async getIp() {
        try {
            const response = await axios_1.default.get('https://api.ipify.org?format=json');
            return response.data.ip;
        }
        catch (error) {
            throw new Error('Failed to fetch IP');
        }
    }
};
exports.LocationService = LocationService;
exports.LocationService = LocationService = __decorate([
    (0, common_1.Injectable)()
], LocationService);
//# sourceMappingURL=location.service.js.map