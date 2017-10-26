import { WeatherSearchService, 
		 WEATHER_API_KEY,
		 WEATHER_API_URL } from './weather-search.service';

export const weatherSearchInjectables: Array<any> = [
	{provide: WeatherSearchService, useClass: WeatherSearchService},
	{provide: WEATHER_API_KEY, useValue: WEATHER_API_KEY},
	{provide: WEATHER_API_URL, useValue: WEATHER_API_URL}
];