import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WeatherSearchService } from './weather-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  //setting image variables
  public image = "";
  public icon = "assets/ico/nt_clear.png";
  public icon1;
  public icon2;
  public icon3;
  public icon4;
  public icon5;
  public happyPicture = "assets/ico/picture/coffee-cup.svg"
  public humidityIco = "assets/ico/humidity.svg";
  public pressureIco = "assets/ico/pressure.svg";
  public windIco = "assets/ico/wind.svg";

  //setting time variables
  public date = new Date().getUTCMonth();
  public season: string;
  public day = new Date().getHours();
  public dayPart: string;
  public happyPhrase: string;


  //setting weather variables
  public condition: string;
  public dayNight: string;
	data;
  hourly: Object;
  days: Object;
  apikey: string = '3af5f670f8497198';
 	apiUrl = 'http://api.wunderground.com/api/';
 	city: string;

	constructor(private http: Http) {

	}

  getWeather(value: string): void {
  	this.city = value;
  	let params: string = `${this.apiUrl}${this.apikey}/conditions/q/${this.city}`;
  	let queryUrl = `${params}.json`;
  	console.log(queryUrl);
  	this.http.get(queryUrl)
      .subscribe((res: Response) => {
          this.data = res.json().current_observation;

          //checking part of the day
          if (Number(res.json().current_observation.observation_time_rfc822.slice(17, 19)) > 6 && Number(res.json().current_observation.observation_time_rfc822.slice(17, 19)) < 21) {
            this.dayNight = "";
          } else {
            this.dayNight = "nt_"
          }
          //making path for the icon
          this.icon = "assets/ico/" + this.dayNight + res.json().current_observation.icon + ".png";

          //making path for background
          if (this.date >= 2 && this.date < 5) {
            this.season = "spring";
          } else if (this.date >= 5 && this.date < 8) {
            this.season = "summer";
          } else if (this.date >= 8 && this.date < 11) {
            this.season = "autumn";
          } else if (this.date === 11 && this.date < 2) {
            this.season = "winter";
          }
          this.image = "assets/" + this.season + "/" + this.dayNight + res.json().current_observation.icon + ".jpg";
      });


    //getting data for hourly forecast
    params = `${this.apiUrl}${this.apikey}/hourly/q/${this.city}`;
    queryUrl = `${params}.json`;
    this.http.get(queryUrl)
      .subscribe((res: Response) => {
          this.hourly = res.json().hourly_forecast;
      });

    //getting data for 10 day forecast
    params = `${this.apiUrl}${this.apikey}/forecast10day/q/${this.city}`;
    queryUrl = `${params}.json`;
    this.http.get(queryUrl)
      .subscribe((res: Response) => {
          this.days = res.json().forecast.simpleforecast.forecastday;
          this.icon1 = "assets/ico/" + res.json().forecast.simpleforecast.forecastday[0].icon + ".png";
          this.icon2 = "assets/ico/" + res.json().forecast.simpleforecast.forecastday[1].icon + ".png";
          this.icon3 = "assets/ico/" + res.json().forecast.simpleforecast.forecastday[2].icon + ".png";
          this.icon4 = "assets/ico/" + res.json().forecast.simpleforecast.forecastday[3].icon + ".png";
          this.icon5 = "assets/ico/" + res.json().forecast.simpleforecast.forecastday[4].icon + ".png";
      });
  }

  ngOnInit() {
    this.getWeather("Ivano-Frankivs'k");
  }

}
