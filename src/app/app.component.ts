import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// let apiUrl = 'http://api.wunderground.com/api/';
// let apikey = '3af5f670f8497198';

export class AppComponent {
	apiUrl: string = 'http://api.wunderground.com/api/';
	apikey: string = '3af5f670f8497198';
	data: Object;
	city: string = 'Tlumach'

	constructor(private http: Http) {

	}

  search(value: string): void {
  	this.city = value;
  	const params: string = `${this.apiUrl}${this.apikey}/conditions/q/${this.city}`;
  	const queryUrl = `${params}.json`;
  	console.log(queryUrl);
  	this.http.get(queryUrl)
      .subscribe((res: Response) => {
          this.data = res.json().current_observation;
          console.log(this.data);
      });
  }

}
