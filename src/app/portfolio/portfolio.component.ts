import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  images:string[]=[
    './assets/image/poert1.png',
    './assets/image/port2.png',
    './assets/image/port3.png',
    './assets/image/poert1.png',
    './assets/image/port2.png',
    './assets/image/port3.png'
  ]
  isValid!:boolean;
  curentSrc!:any;
openImg(eventInfo:any){
 this.curentSrc=eventInfo.target.dataset.src,
 console.log(this.curentSrc)
this.isValid= true
}
closeImg():void{
  this.isValid= false
}
}
