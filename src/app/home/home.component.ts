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
  openDetails:any = false;
  ethVal:any;

  lululemon = [
    {
      image:'1',
      title:'City Sweat Jogger',
      price:10
    },
    {
      image:'2',
      title:'Mens Puff Jacket',
      price:20
    },
    {
      image:'3',
      title:'Metal Vent Tech Short Sleeve Shirt',
      price:30
    },
    {
      image:'4',
      title:'Women Vest',
      price:40
    },
    {
      image:'5',
      title:'Womens dress (Merino Wool-Blend Knit)',
      price:50
    },
    {
      image:'6',
      title:'Womens sweat pants',
      price:60
    }
  ]

  constructor(private api:ApiServiceService) { }

  ngOnInit(): void {
    // this.api.getConfig().subscribe((res)=>{
    //    for(let i=0; i<5; i++)
    //   {
    //     this.data = this.data.concat(res);
    //   }
    // }); 
    this.data = this.lululemon;
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

  openDetail(){
    this.openDetails = true;
  }
  closeDetails(){
    this.openDetails = false;
  }
}
