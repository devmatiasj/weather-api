import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { LocationController } from '../../Location/location.controller';
import { LocationService } from '../../Location/location.service';
import { HttpService } from '../../shared/http/http.service';
import { ConfigService } from '@nestjs/config';

describe('LocationController (e2e)', () => {
  let app: INestApplication;
  let locationService: LocationService;


  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [LocationController],
      providers: [LocationService, ConfigService, HttpService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    locationService = moduleFixture.get<LocationService>(LocationService);
  });

  it('/GET v1/location (getLocation)', async () => {
    // Mock the IP and location data
    const mockIp = '127.0.0.1';
    const mockLocation = { latitude: 123, longitude: 456, city: 'MockCity' };
    jest.spyOn(locationService, 'getIp').mockResolvedValue(mockIp);
    jest.spyOn(locationService, 'getLocation').mockResolvedValue(mockLocation);

    // Make a request to the endpoint
    const res = await request(app.getHttpServer())
      .get('/v1/location')
      .expect(200);

    // Assert the response matches the expected location data
    expect(res.body).toEqual(mockLocation);
  });

  afterAll(async () => {
    await app.close();
  });
});