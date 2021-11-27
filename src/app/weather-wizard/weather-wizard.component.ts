import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-wizard',
  templateUrl: './weather-wizard.component.html',
  styleUrls: ['./weather-wizard.component.css']
})
export class WeatherWizardComponent implements OnInit {
  WeatherData: any;
  route_params: any;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.getWeatherData();
    this.setRouteParam();
  }
  // setting up route params
  setRouteParam() {
    this.route_params = {};
    this.route_params.country = this.route.snapshot.params['country'];
    this.route_params.city = this.route.snapshot.params['city'];
  }
  getWeatherData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.route.snapshot.params['city']}&APPID=794ee95e63c5a32aaf88cd813fa2e425`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setWeatherData(data);
      });
  }
  setWeatherData(data: any) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleString();
    this.WeatherData.temp_celcius = (
      this.WeatherData.main.temp - 273.15
    ).toFixed(0);
    this.WeatherData.temp_min = (
      this.WeatherData.main.temp_min - 273.15
    ).toFixed(0);
    this.WeatherData.temp_max = (
      this.WeatherData.main.temp_max - 273.15
    ).toFixed(0);
    // console.log(this.WeatherData);
    // console.log(this.route_params);
  }
}
