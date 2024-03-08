import { Test, TestingModule } from '@nestjs/testing';
import { LocationService } from '../../api/Location/location.service';
import { HttpService } from '../../shared/http/http.service';
import { ConfigService } from '@nestjs/config';
import { of } from 'rxjs';
import { mockLocation, mockIP } from '../mocks/location.mocks';
import { LocationMapper } from '../../mappers/location.mapper';


describe('LocationService', () => {
  let service: LocationService;
  let httpService: HttpService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationService,
        LocationMapper,
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
      jest.spyOn(httpService, 'get').mockReturnValueOnce(of({ data: mockLocation }).toPromise());

      const result = await service.getLocation(mockIP);

      expect(result).toEqual(mockLocation);
    });

    it('should throw an error if fetching location fails', async () => {
      jest.spyOn(httpService, 'get').mockReturnValueOnce(Promise.reject(new Error()));

      await expect(service.getLocation(mockIP)).rejects.toThrowError('Failed to fetch location');
    });
  });

  describe('getIp', () => {
    it('should return IP address', async () => {
      const mockIpData = { ip: mockIP };
      jest.spyOn(httpService, 'get').mockReturnValueOnce(of({ data: mockIpData }).toPromise());

      const result = await service.getIp();

      expect(result).toEqual(mockIP);
    });

    it('should throw an error if fetching IP fails', async () => {
      jest.spyOn(httpService, 'get').mockReturnValueOnce(Promise.reject(new Error()));

      await expect(service.getIp()).rejects.toThrowError('Failed to fetch IP');
    });
  });
});