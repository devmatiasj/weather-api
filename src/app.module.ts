import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LocationModule } from './location/location.module';
import { WeatherModule } from './weather/weather.module';


@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
  }),
    WeatherModule,
    LocationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
