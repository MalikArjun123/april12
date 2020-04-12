// import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { IonSlides } from '@ionic/angular';
import { Component, ViewChild } from '@angular/core';
// import { NgCircleProgressModule } from 'ng-circle-progress';
import { PopoverPage } from '../about-popover/about-popover';
import { PopoverController } from '@ionic/angular';
import * as HighCharts from 'highcharts';
// import {CountdownTimerModule} from 'angular-countdown-timer';

// import {Tab1Page} from '../tab1/tab1.page';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
date = new Date('2020-04-13T09:00:00');

  public loadProgress: number = 0;
  public logo: number = 0;
  public third: number = 0;
  public fourth: number = 0;
  public fifth: number = 0;
  public sixth: number = 0;
  public seventh: number = 0;
  public first: number = 0;
  public second: number = 0;
  progress = 0;
  public pappu: number = 0;
  public nara: number = 0;
 
  months = [
    {value: 0,name: '1Lot=₹100'},
    {value: 1,name: '2Lot=₹200'},
    {value: 2,name: '3Lot=₹300'},
    {value: 2,name: '4Lot=₹400'}
  ];
  transaction = {
    value: 0,
    expense: false,
    month: 0
  }
  @ViewChild('slides', { static: true }) slides: IonSlides;
 

segment:string;
  constructor(public router: Router,
  public alertController:AlertController,
    public popoverCtrl: PopoverController,
    private webIntent: WebIntent,
    // public  tobo:Tab1Page
    // public circle: NgCircleProgressModule
  ) {

this.segment="hundred";

  }
  
  ionViewDidEnter() {
    // this.plotSimpleBarChart();

  }
   inc=0;
   myFunction() {
     if(this.inc<100){
     this.inc=this.inc+1;
     }
     else{
       this.inc=0;
     }
    //  alert(this.inc);    
  }
//   plotSimpleBarChart() {
//     HighCharts.chart('highcharts', {      chart: {
//         type: 'bar',
        
//       },
//       title: {
//         text: 'Rakesh Daily P&L ',
         
//       },
//       legend: {
//         floating: true,
//         layout: 'vertical',
//         symbolRadius: 1,
//         x: -150,
//         y: -65
//       },
//       subtitle:{text:'20thJAN,2020 - 24thJAN,2020'},
      
//       xAxis: {
//         // categories: ['Arjun'],
//         // title: {
//         //   text: ' Traders',
          
          
//         // }
//       },
//       yAxis: {
//         min:-100,
//         max: 100,
//         labels:{
//           formatter: function(){
//             return this.value +'%';
//           }
//         },
//         title: {
//           text: ' Profit&Loss',
          
          
//         }
//       },
//       tooltip: {
//         headerFormat: '<b>{series.name}</b><br/>',
//         pointFormat: '{point.y:.f}%'
//       },
//       series: [{
//         name: 'monday',
//         data: [100],
//         type:undefined
        
//       }, {
//         name: 'tuesday',
//         data: [70],
//         type:undefined
//       }, {
//         name: 'wedesday',
//         data: [-60],

//         type:undefined
//       }, {
//         name: 'thursday',
//         data: [80],
//         type:undefined

//       }, {
//         name: 'friday',
//         data: [-20],
//         type:undefined

//       }]
      
// })
// HighCharts.chart('highcharts1', {      chart: {
//   type: 'bar',
  
// },
// title: {
//   text: 'Jacob Daily P&L ',
   
// },
// legend: {
//   floating: true,
//   layout: 'vertical',
//   symbolRadius: 1,
//   x: -150,
//   y: -65
// },
// subtitle:{text:'20thJAN,2020 - 24thJAN,2020'},

// xAxis: {
//   // categories: ['Arjun'],
//   // title: {
//   //   text: ' Traders',
    
    
//   // }
// },
// yAxis: {
//   min:-100,
//   max: 100,
//   labels:{
//     formatter: function(){
//       return this.value +'%';
//     }
//   },
//   title: {
//     text: ' Profit&Loss',
    
    
//   }
// },
// tooltip: {
//   headerFormat: '<b>{series.name}</b><br/>',
//   pointFormat: '{point.y:.f}%'
// },
// series: [{
//   name: 'monday',
//   data: [100],
//   type:undefined
  
// }, {
//   name: 'tuesday',
//   data: [20],
//   type:undefined
// }, {
//   name: 'wedesday',
//   data: [-80],

//   type:undefined
// }, {
//   name: 'thursday',
//   data: [50],
//   type:undefined

// }, {
//   name: 'friday',
//   data: [-20],
//   type:undefined

// }]

// })
// HighCharts.chart('highcharts2', {      chart: {
//   type: 'bar',
  
// },
// title: {
//   text: 'Arjun Daily P&L ',
   
// },
// legend: {
//   floating: true,
//   layout: 'vertical',
//   symbolRadius: 1,
//   x: -150,
//   y: -65
// },
// subtitle:{text:'20thJAN,2020 - 24thJAN,2020'},

// xAxis: {
//   // categories: ['Arjun'],
//   // title: {
//   //   text: ' Traders',
    
    
//   // }
// },
// yAxis: {
//   min:-100,
//   max: 100,
//   labels:{
//     formatter: function(){
//       return this.value +'%';
//     }
//   },
//   title: {
//     text: ' Profit&Loss',
    
    
//   }
// },
// tooltip: {
//   headerFormat: '<b>{series.name}</b><br/>',
//   pointFormat: '{point.y:.f}%'
// },
// series: [{
//   name: 'monday',
//   data: [60],
//   type:undefined
  
// }, {
//   name: 'tuesday',
//   data: [30],
//   type:undefined
// }, {
//   name: 'wedesday',
//   data: [-60],

//   type:undefined
// }, {
//   name: 'thursday',
//   data: [60],
//   type:undefined

// }, {
//   name: 'friday',
//   data: [40],
//   type:undefined

// }]

// })
//   }
async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Sort By Peformance',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Last Day',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Last Week',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Last Month',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Profit',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Overall',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event,
      mode:"ios",
      
    });
    await popover.present();
  }
  intervalId;
  
abc(){
  this.router.navigate(['janalysis'])


}
def(){
  this.router.navigate(['ranalysis'])


}
ghi(){
  this.router.navigate(['aanalysis'])


}
jkl(){
  this.router.navigate(['roanalysis'])


}
mno(){
  this.router.navigate(['hanalysis'])


}
pqr(){
  this.router.navigate(['sanalysis'])


}



  ngOnInit() {
    const getDownloadProgress = () => {
      // console.log('getDownload', this);
      if (this.progress <= 99 ){
        // console.log('inside if', this.progress);
        this.progress = this.progress + 1;
        // this.pappu = this.pappu +1;
      }
      else if(this.pappu< 50){
        this.pappu += 1;

      }
      else if(this.nara<30)
      {
        this.nara +=1;
      }
      // else if(this.pappu <= 50){
      //   this.pappu = this.pappu +1;
      // }
      else {
        clearInterval(this.intervalId);
      }
    }
    this.intervalId = setInterval(getDownloadProgress, 1);
    
    // Test interval to show the progress bar
    setInterval(() => {
      if (this.loadProgress < 40)
        this.loadProgress += 1;

      else if (this.logo < 80)
        this.logo += 1;
      else if (this.first < 50)
        this.first += 1;
      else if (this.second < 70)
        this.second += 1;
      else if (this.third < 20)
        this.third += 1;
      else if (this.fourth < 30)
        this.fourth += 1;
      else if (this.fifth < 90)
        this.fifth += 1;
      else if (this.sixth < 100)
        this.sixth += 1;
      else if (this.seventh < 10)
        this.seventh += 1;
      else
        clearInterval(this.loadProgress);
    }, 0);
  }

  slideOpt = {
    // direction: 'vertical',
    effect: 'fade',
    slidesPerView: 1,
    // spaceBetween: 100,
    // pagination: {
    //   el: '.swiper-pagination',
    // }
  }
  // abda = {
  //   effect:'fade',
  //   // direction:'default',
  //   pagination:{
  //     el:'.swiper-pagination',
  //   }
  // }
  upi() {
    const options = {
      action: this.webIntent.ACTION_VIEW,
      //url: 'upi://pay?pa=chandraedara1993@okicici&pn=EDARA CHANDRAKAR&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894398cndhcd23&am=10&cu=INR&tn=App Payment'
      url: 'upi://pay?pa=chandraedara1993@okicici&pn=edara%20chandrakar&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894398cndhcd23&tn=mystar%20store&am=100&cu=INR&mode=00&sign=aagshd4542bdhhvdshsbvqfqttsvsvsbsjn&orgid=00000'

    }

    this.webIntent.startActivityForResult(options).then(
      onSuccess => {
        console.log("Success", onSuccess);

      },
      onError => {
        console.log("error", onError);
      });
  }
  btnClickedback() {
    console.log("btn is clicked")
    this.router.navigate(['contests'])
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
