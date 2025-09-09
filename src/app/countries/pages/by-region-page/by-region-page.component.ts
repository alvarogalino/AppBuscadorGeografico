import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountriesService } from '../../service/country.service';
import { Country } from '../../interfaces/country';
import { CountryPageComponent } from '../country-page/country-page.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'countries-region-page',
  standalone: true,
  imports: [CommonModule, SharedModule, HttpClientModule, CountryTableComponent, CountryPageComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService){}

  searchByRegion(region:string):void{
    this.countriesService.searchRegion(region).subscribe(countries=>{this.countries=countries})
  }

}
