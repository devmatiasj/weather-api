import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../app.module';


describe('LocationController (e2e)', () => {
    let app: INestApplication;
  
    beforeAll(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();
  
      app = moduleFixture.createNestApplication();
      await app.init();
    });
  
    it('/GET v1/location', () => {
      return request(app.getHttpServer())
        .get('/v1/location')
        .expect(200)
        .expect('Content-Type', /json/);
    });
  
    afterAll(async () => {
      await app.close();
    });
  });