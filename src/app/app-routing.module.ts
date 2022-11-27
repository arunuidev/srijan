import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HexagonComponent } from './hexagon/hexagon.component';
import { HomeComponent } from './home/home.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import {AdventCodeComponent} from './advent-code/advent-code.component'
const routes: Routes = [
  {
    path:'payment',
    component:PaymentPageComponent,
   },
   {
    path:'',
    component:HomeComponent,
   },
   {
     path:'about',
     component:HexagonComponent
   },
   {
     path:'advent',
     component:AdventCodeComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
