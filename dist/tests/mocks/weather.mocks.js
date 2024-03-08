"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockForecastWeather = exports.mockCurrentWeather = void 0;
const mockCurrentWeather = {
    coord: { lon: -58.3772, lat: -34.6132 },
    weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
    base: 'stations',
    main: { temp: 301.27, feels_like: 301.55, temp_min: 300.86, temp_max: 303.14, pressure: 1014, humidity: 48 },
    visibility: 10000,
    wind: { speed: 6.26, deg: 360, gust: 0 },
    clouds: { all: 0 },
    dt: 1709842489,
    sys: { type: 2, id: 2092396, country: 'AR', sunrise: 1709804791, sunset: 1709850155 },
    timezone: -10800,
    id: 3435910,
    name: 'Buenos Aires',
    cod: 200,
};
exports.mockCurrentWeather = mockCurrentWeather;
const mockForecastItem1 = {
    dt: 1709910000,
    main: { temp: 299.96, feels_like: 302.56, temp_min: 299.96, temp_max: 303.06, pressure: 972, sea_level: 972, grnd_level: 963, humidity: 81, temp_kf: -3.1 },
    weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
    clouds: { all: 8 },
    wind: { speed: 5.22, deg: 36, gust: 7.01 },
    visibility: 10000,
    pop: 0.06,
    sys: { pod: 'd' },
    dt_txt: '2024-03-08 15:00:00',
};
const mockForecastItem2 = {
    dt: 1709920800,
    main: { temp: 301.99, feels_like: 305.71, temp_min: 301.99, temp_max: 306.04, pressure: 982, sea_level: 982, grnd_level: 961, humidity: 71, temp_kf: -4.05 },
    weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }],
    clouds: { all: 14 },
    wind: { speed: 5.63, deg: 44, gust: 6.62 },
    visibility: 10000,
    pop: 0.07,
    sys: { pod: 'd' },
    dt_txt: '2024-03-08 18:00:00',
};
const mockForecastWeather = {
    cod: '200',
    message: 0,
    cnt: 40,
    list: [mockForecastItem1, mockForecastItem2],
    city: {
        id: 3860259,
        name: 'Córdoba',
        coord: { lat: -31.4135, lon: -64.1811 },
        country: 'AR',
        population: 1428214,
        timezone: -10800,
        sunrise: 1709892733,
        sunset: 1709937768,
    },
};
exports.mockForecastWeather = mockForecastWeather;
//# sourceMappingURL=weather.mocks.js.map