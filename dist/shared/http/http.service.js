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
exports.HttpService = void 0;
const axios_1 = require("axios");
const common_1 = require("@nestjs/common");
let HttpService = class HttpService {
    constructor() {
        this.axiosInstance = axios_1.default.create();
    }
    async get(url) {
        try {
            const response = await this.axiosInstance.get(url);
            return response;
        }
        catch (error) {
            throw new Error('Failed to make GET request');
        }
    }
    async post(url, data) {
        try {
            const response = await this.axiosInstance.post(url, data);
            return response;
        }
        catch (error) {
            throw new Error('Failed to make POST request');
        }
    }
};
exports.HttpService = HttpService;
exports.HttpService = HttpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], HttpService);
//# sourceMappingURL=http.service.js.map