import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HexagonComponent } from './hexagon/hexagon.component';
import { AdventCodeComponent } from './advent-code/advent-code.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentPageComponent,
    HomeComponent,
    HexagonComponent,
    AdventCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
