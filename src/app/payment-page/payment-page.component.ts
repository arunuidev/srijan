import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
 
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  ethPayment:boolean = false;
  _ethValue:any = 0;
  cryptoDetails:any[] = [];
  @Output() closePopup = new EventEmitter();
  @Input("ethValue")
  set ethValue(value){
    this._ethValue = value;
  }
  get ethValue(){
    return this._ethValue;
  }

  constructor(private api:ApiServiceService) { }

  ngOnInit(): void {
    this.api.postCoins().subscribe((res)=>{
      this.cryptoDetails = res;
    })
  }
  ethWallet(){
    this.ethPayment = true;
    // setTimeout(()=>{ 
    // (document.getElementById('amount') as HTMLInputElement).value = this._ethValue
    // },2000)
  }

  // onloadEmb(){
  //   (document.getElementById('ass') as HTMLBodyElement).click();
  //   (document.getElementById('amount') as HTMLInputElement).value = this._ethValue
  // }
  closeBtns(){
    this.closePopup.emit(true)
  }
}
