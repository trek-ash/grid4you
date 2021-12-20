import { Component, OnInit, Input } from '@angular/core';
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  @Input('country_code') country_code = null
  constructor() { }

  ngOnInit(): void {
  }

  getCountryName(country_code) {
    return country_code
  }

  getCountryIcon(country_code)  {
    return getUnicodeFlagIcon(country_code)
  }
}
