import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
