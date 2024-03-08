import { Location } from "../../models/location.model";

const mockLocation: Location = {
    country: 'Argentina',
    countryCode: 'AR',
    region: 'X',
    regionName: 'Cordoba',
    city: 'Cordoba',
    zip: '5000',
    lat: -31.429,
    lon: -64.1756,
    timezone: 'America/Argentina/Cordoba',
    isp: 'Telecom Argentina S.A',
    org: 'Fibertel',
    as: 'AS7303 Telecom Argentina S.A.',
    query: '181.31.130.234'
  };

const mockIP: string = '127.0.0.1';



export {mockLocation, mockIP}