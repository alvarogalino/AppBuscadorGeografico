import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { CommonModule } from '@angular/common';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePagesComponent,
    AboutPagesComponent,
    SidebarComponent,
    ContactPagesComponent,
    SearchBoxComponent,
    RouterModule
  ],
  exports:[HomePagesComponent, AboutPagesComponent, SidebarComponent, ContactPagesComponent, SearchBoxComponent]
})
export class SharedModule { }
