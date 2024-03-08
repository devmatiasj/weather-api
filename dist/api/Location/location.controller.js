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
exports.LocationController = void 0;
const common_1 = require("@nestjs/common");
const location_service_1 = require("./location.service");
const swagger_1 = require("@nestjs/swagger");
let LocationController = class LocationController {
    constructor(locationService) {
        this.locationService = locationService;
    }
    async getLocation() {
        const ip = await this.locationService.getIp();
        return this.locationService.getLocation(ip);
    }
};
exports.LocationController = LocationController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get current location' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The current location' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getLocation", null);
exports.LocationController = LocationController = __decorate([
    (0, swagger_1.ApiTags)('Location'),
    (0, common_1.Controller)('v1/location'),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], LocationController);
//# sourceMappingURL=location.controller.js.map