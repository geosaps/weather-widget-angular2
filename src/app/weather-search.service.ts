import { Injectable, Inject, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';


export const WEATHER_API_KEY = '3af5f670f8497198';
export const WEATHER_API_URL = 'http://api.wunderground.com/api/';

@Injectable()
export class WeatherSearchService {
	data: Object;
	city: string = 'Tlumach'

  constructor(private http: Http, 
  	@Inject(WEATHER_API_KEY) private apikey: string,
  	@Inject(WEATHER_API_URL) private apiUrl: string) { }



}
