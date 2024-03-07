import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LocationModule } from './Location/location.module';
import { WeatherModule } from './Weather/weather.module';
import { HttpService } from './shared/http/http.service';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
  }),
    WeatherModule,
    LocationModule,
  ],
  controllers: [],
  providers: [HttpService],
})
export class AppModule {}
