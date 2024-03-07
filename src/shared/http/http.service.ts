import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpService {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
  }

  async get(url: string): Promise<any> {
    try {
      const response = await this.axiosInstance.get(url);
      return response;
    } catch (error) {
      throw new Error('Failed to make GET request');
    }
  }

  async post(url: string, data: any): Promise<any> {
    try {
      const response = await this.axiosInstance.post(url, data);
      return response;
    } catch (error) {
      throw new Error('Failed to make POST request');
    }
  }
}