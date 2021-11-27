import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {
  CountryData: any;
  loading: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.getCountryData();
  }
  getCountryData() {
    fetch(`https://restcountries.com/v2/all`)
      .then((res) => res.json())
      .then((data) => {
        this.setCountryData(data);
      });
  }
  setCountryData(data: any) {
    this.CountryData = [];
    data.map((item: any, index: any) => {
      let country_data = {
        id: index + 1,
        name: item.name,
        capital: item.capital,
        flag: item.flags.png,
        area: item.area,
        population: item.population,
        languages: item.languages,
        currencies: item.currencies,
        region: item.region,
        numeric_code: item.numericCode,
        isIndependent: item.independent,
      };
      this.CountryData.push(country_data);
    });
    this.loading = false;
    // console.log(data[1]);
  }
}
