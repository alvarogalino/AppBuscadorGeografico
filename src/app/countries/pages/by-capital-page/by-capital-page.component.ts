import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountriesService } from '../../service/country.service';
import { Country } from '../../interfaces/country';
import { CountryPageComponent } from '../country-page/country-page.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'countries-capital-page',
  standalone: true,
  imports: [SharedModule, CommonModule, HttpClientModule, CountryTableComponent, CountryPageComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService){}

  searchByCapital(term:string):void{
    this.countriesService.searchCapital(term).subscribe(countries=>{this.countries=countries})
  }

}
