import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  data = [];

  constructor(private api:ApiServiceService) { }

  ngOnInit(): void {
    this.api.getatsConfig().subscribe((val)=>{
      this.data = val;
    })
  }

}
