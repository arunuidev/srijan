import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:any[] =[];
  openPopups:any = false;
  ethVal:any;
  constructor(private api:ApiServiceService) { }

  ngOnInit(): void {
    this.api.getConfig().subscribe((res)=>{
      for(let i=0; i<5; i++)
      {
        this.data = this.data.concat(res.products);
      }
    });
   
     
  }
 
  openNav() {
    (document.getElementById("mySidebar") as HTMLBodyElement).style.width = "250px";
    (document.getElementById("main") as HTMLBodyElement).style.marginLeft = "250px";
  }
  
  closeNav() {
    (document.getElementById("mySidebar") as HTMLBodyElement).style.width = "0";
    (document.getElementById("main") as HTMLBodyElement).style.marginLeft= "0";
  }

  openPopup(val:any)
  {
    this.openPopups = true;
    this.ethVal = val;
    localStorage.setItem('amount',val)
  }
  closePop(event:any){
    this.openPopups = false;
  }
}
