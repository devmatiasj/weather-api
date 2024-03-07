import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../app.module';

describe('WeatherController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET v1/weather/current', () => {
    return request(app.getHttpServer())
      .get('/v1/weather/current')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('/GET v1/weather/forecast', () => {
    return request(app.getHttpServer())
      .get('/v1/weather/forecast')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  afterAll(async () => {
    await app.close();
  });
});