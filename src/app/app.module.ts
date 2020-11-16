import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { PrimaryNavbarComponent } from './components/primary-navbar/primary-navbar.component';
import { SecondaryNavbarComponent } from './components/secondary-navbar/secondary-navbar.component';
import { environment } from '../environments/environment';
import { ShoesShellComponent } from './shoes/shoes-shell/shoes-shell.component';
import { ShoesModule } from './shoes/shoes.module';
import { FaqComponent } from './pages/faq/faq.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryNavbarComponent,
    SecondaryNavbarComponent,
    ShoesShellComponent,
    FaqComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShoesModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
