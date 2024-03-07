import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()

export class LocationService {
  
  async getLocation(ip: string): Promise<any> {
    const url = `http://ip-api.com/json/${ip}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch location');
    }
  }

  async getIp(): Promise<string> {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      return response.data.ip;
    } catch (error) {
      throw new Error('Failed to fetch IP');
    }
  }
}
