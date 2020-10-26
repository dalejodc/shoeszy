import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoesListComponent } from './shoes/shoes-list/shoes-list.component';
import { ShoesShowComponent } from './shoes/shoes-show/shoes-show.component';
import { PrimaryNavbarComponent } from './components/primary-navbar/primary-navbar.component';
import { SecondaryNavbarComponent } from './components/secondary-navbar/secondary-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoesListComponent,
    ShoesShowComponent,
    PrimaryNavbarComponent,
    SecondaryNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
