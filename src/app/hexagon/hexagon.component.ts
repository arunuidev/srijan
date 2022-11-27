import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
 
@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss']
})
export class HexagonComponent implements OnInit {

  items: any[] = [];
  chart:any;
  tab = 0;
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.items.push({
        id: i,
        blink: i < 10 ? 1 : i < 20 ? 2 : 3
      });
    }
  }
  closePopup(ele: any) {
    let honey: any = document.getElementsByClassName('honey') as HTMLCollection;
    Array.from(honey).forEach((val: any) => {
      val.classList.remove("hideEffect");
      val.classList.remove('positionHex')
      val.style.animation = ''
    });
    (document.getElementById('popup_' + ele) as HTMLBodyElement).style.display = 'none';
  }
  showPop(ele: any) {
    let honey: any = document.getElementsByClassName('honey') as HTMLCollection;
    Array.from(honey).forEach((val: any) => {
      val.classList.add("hideEffect");
    });
    honey[ele].classList.add('positionHex');
    honey[ele].style.animation = 'zoomIn 1s linear'
    honey[ele].classList.remove("hideEffect");
    (document.getElementById('popup_' + ele) as HTMLBodyElement).style.display = 'block';
    this.createChart(ele);
  }
  idClick(ele: any) {
    let blinkRemove = document.getElementsByClassName('blinkEffect') as HTMLCollection;
    let imgRemove = document.getElementsByClassName('imgEffect') as HTMLCollection;
    if (Array.from(blinkRemove).length !== 0) {
      Array.from(blinkRemove).forEach((val) => {
        val.classList.remove('blinkEffect')
      })
    }
    if (Array.from(imgRemove).length !== 0) {
      Array.from(imgRemove).forEach((val) => {
        val.classList.remove('imgRemove');
        val.setAttribute("src","https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-030-happy-fisher.png");
      })
    }
    let data = document.getElementsByClassName('honey_' + ele) as HTMLCollection;
    Array.from(data).forEach((val) => {
      val.classList.add('blinkEffect')
    });
    let dataImg = document.getElementsByClassName('honeyimg_' + ele) as HTMLCollection;
    Array.from(dataImg).forEach((val) => {
      val.classList.add('imgEffect')
      val.setAttribute("src","https://wallpapercave.com/wp/wp7141329.png");
    })
  }


  public createChart(e:any) {

    const canvas = <HTMLCanvasElement>document.getElementById('MyChart_'+e);

    const ctx:any = canvas.getContext('2d');

    var gradient = ctx.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, 'rgba(80, 83, 234,1)');

    gradient.addColorStop(1, 'rgba(80, 83, 234,0)');

    this.chart = new Chart("MyChart_"+e, {

      type: 'line',

      data: {

        labels: ['2022', '2021', '2020', '2019','2018', '2017'],

        datasets: [

          {
            label:'',
            backgroundColor: gradient,

            borderColor: "rgba(80, 83, 234,1)",

            pointBackgroundColor: "#fff",

            pointBorderColor: "rgba(80, 83, 234,1)", 
 
            data: [25.0, 32.4, 22.2, 39.4, 34.2, 22.0, 23.2, 24.1, 20.0, 18.4, 19.1, 17.4]
          }

        ]

      },
      options: {
        legend:{
          display:false
        },
        responsive: true,  
        scales: {
          xAxes: [{ 
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
          },
          ticks: {
            fontSize: 10
        },
            display: true,
          }],

          yAxes: [{ 
            ticks: {
              display: false
          },
            display: true,
          }]

        }

      }

    });

  }
  public onTabSelection(index:any) {

    this.tab = index;

  }
}
