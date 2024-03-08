import { ApiProperty } from '@nestjs/swagger';

export class CurrentWeatherDto {
  @ApiProperty()
  coord: {
    lon: number;
    lat: number;
  };

  @ApiProperty({ type: [Object] })
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];

  @ApiProperty()
  base: string;

  @ApiProperty()
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };

  @ApiProperty()
  visibility: number;

  @ApiProperty()
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };

  @ApiProperty()
  clouds: {
    all: number;
  };

  @ApiProperty()
  dt: number;

  @ApiProperty()
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };

  @ApiProperty()
  timezone: number;

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  cod: number;
}

export class ForecastWeatherDto {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItemDto[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export class ForecastItemDto {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}