import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { LocationController } from '../../api/Location/location.controller';
import { LocationService } from '../../api/Location/location.service';
import { HttpService } from '../../shared/http/http.service';
import { ConfigService } from '@nestjs/config';
import { mockLocation, mockIP } from '../mocks/location.mocks';
import { LocationMapper } from '../../mappers/location.mapper';


describe('LocationController (e2e)', () => {
  let app: INestApplication;
  let locationService: LocationService;


  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [LocationController],
      providers: [LocationService, ConfigService, HttpService, LocationMapper],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    locationService = moduleFixture.get<LocationService>(LocationService);
  });

  it('/GET v1/location (getLocation)', async () => {
    jest.spyOn(locationService, 'getIp').mockResolvedValue(mockIP);
    jest.spyOn(locationService, 'getLocation').mockResolvedValue(mockLocation);

    const res = await request(app.getHttpServer())
      .get('/v1/location')
      .expect(200);

    expect(res.body).toEqual(mockLocation);
  });

  afterAll(async () => {
    await app.close();
  });
});