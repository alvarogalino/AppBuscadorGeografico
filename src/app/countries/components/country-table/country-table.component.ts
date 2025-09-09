import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Country } from '../../interfaces/country';
import { CountryPageComponent } from '../../pages/country-page/country-page.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [CommonModule, RouterModule, CountryPageComponent],
  templateUrl: './country-table.component.html',
  styles: [` img{width:25px;}`]
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];

}
