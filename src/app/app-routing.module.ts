import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { WalletComponent } from './wallet/wallet.component';
const routes: Routes = [
  {
    path:'payment',
    component:PaymentPageComponent,
   },
   {
    path:'',
    component:HomeComponent,
   } 
   ,
   {
     path:'wallet',
     component:WalletComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
