import { Test, TestingModule } from '@nestjs/testing';
import { LocationService } from '../../Location/location.service';
import { HttpService } from '../../shared/http/http.service';
import { ConfigService } from '@nestjs/config';
import { of } from 'rxjs';

describe('LocationService', () => {
  let service: LocationService;
  let httpService: HttpService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'IP_API_BASE_URL') {
                return 'mock_ip_api_base_url';
              } else if (key === 'IPIFY_BASE_URL') {
                return 'mock_ipify_base_url';
              }
            }),
          },
        },
      ],
    }).compile();

    service = module.get<LocationService>(LocationService);
    httpService = module.get<HttpService>(HttpService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getLocation', () => {
    it('should return location data', async () => {
      const mockIp = '127.0.0.1';
      const mockLocationData = { city: 'MockCity', latitude: 123, longitude: 456 };
      jest.spyOn(httpService, 'get').mockReturnValueOnce(of({ data: mockLocationData }).toPromise());

      const result = await service.getLocation(mockIp);

      expect(result).toEqual(mockLocationData);
    });

    it('should throw an error if fetching location fails', async () => {
      const mockIp = '127.0.0.1';
      jest.spyOn(httpService, 'get').mockReturnValueOnce(Promise.reject(new Error()));

      await expect(service.getLocation(mockIp)).rejects.toThrowError('Failed to fetch location');
    });
  });

  describe('getIp', () => {
    it('should return IP address', async () => {
      const mockIp = '127.0.0.1';
      const mockIpData = { ip: mockIp };
      jest.spyOn(httpService, 'get').mockReturnValueOnce(of({ data: mockIpData }).toPromise());

      const result = await service.getIp();

      expect(result).toEqual(mockIp);
    });

    it('should throw an error if fetching IP fails', async () => {
      jest.spyOn(httpService, 'get').mockReturnValueOnce(Promise.reject(new Error()));

      await expect(service.getIp()).rejects.toThrowError('Failed to fetch IP');
    });
  });
});