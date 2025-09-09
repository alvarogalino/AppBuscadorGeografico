import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CountriesService } from '../../service/country.service';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  standalone: true,
  imports: [ CommonModule, SharedModule, HttpClientModule, CountryTableComponent],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  public country? : Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router:Router){}

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(switchMap(({id})=>this.countriesService.searchByAlphaCode(id)),)
    .subscribe(country =>{if (!country) return this.router.navigateByUrl('');
    return this.country = country;});
  }



}
