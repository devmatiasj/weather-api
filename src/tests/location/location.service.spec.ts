import { Test, TestingModule } from '@nestjs/testing';
import axios from 'axios';
import { LocationService } from '../../Location/location.service';

jest.mock('axios');

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationService],
    }).compile();

    service = module.get<LocationService>(LocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('getLocation should return location data', async () => {
    const mockLocationData = { city: 'New York' };
    (axios.get as jest.Mock).mockResolvedValue({ data: mockLocationData });

    const ip = await service.getIp();
    const location = await service.getLocation(ip);

    expect(location).toEqual(mockLocationData);
  });

  it('getIp should return IP address', async () => {
    const mockIpData = { ip: '127.0.0.1' };
    (axios.get as jest.Mock).mockResolvedValue({ data: mockIpData });

    const ip = await service.getIp();

    expect(ip).toEqual(mockIpData.ip);
  });
});