import { Component, ViewChild,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { ToastController, NavController } from '@ionic/angular';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { AngularFireAuth } from '@angular/fire/auth';
import { IonSlides } from '@ionic/angular';
 import { HPopoverPage } from '../about-popover/hpopover';
 import { PopoverController } from '@ionic/angular';
import * as HighCharts from 'highcharts';
import {HCartService} from '../services/hcart.service';

declare var google;

@Component({
  selector: 'app-hanalysis',
  templateUrl: 'hanalysis.page.html',
  styleUrls: ['hanalysis.page.scss']
})
export class Hanalysis {
  // public loadProgress: number = 0;
  // public logo: number = 0;
  // public third: number = 0;
  // public fourth: number = 0;
  // public fifth: number = 0;
  // public sixth: number = 0;
  // public seventh: number = 0;
  // public first: number = 0;
  // public second: number = 0;
  // @Input('pol')pol;
  public columnChart: GoogleChartInterface;

  public columnChart1: GoogleChartInterface;
  public columnChart2: GoogleChartInterface;
  public barChart: GoogleChartInterface;
  @ViewChild('slides', { static: true }) slides: IonSlides;
  segment: string;
  inc=50;
  abc=250;
  // public productQty=0;
  addToCart(){
    this.cartService.productQty +=1
  }
  updateCart(type){
    if (type== 'add'){
      this.cartService.productQty += 1
    }
    if (type == 'remove')
    {
      this.cartService.productQty -= 1
    }
  }
  myFunctionpro() {
    this.abc=100-this.inc;

    if(this.inc<100){
    this.inc=this.inc+1;
    }
    else{
      this.inc=0;
    }
   //  alert(this.inc);    
 }
  constructor(public afAuth: AngularFireAuth,
     public popoverCtrl: PopoverController,
    public navCtrl:NavController,
    public cartService: HCartService
  ) {
    // this.segment="chart";
  }
  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: HPopoverPage,
      event,
      mode: "ios",

    });
    await popover.present();
  }
// ionViewDidload(){
//   this.plotSimpleBarChart();
// }
// ngOnInit(){
//   this.plotSimpleBarChart();
// }
//   ionViewDidEnter() {
//     // this.loadColumnChart();
//     this.plotSimpleBarChart();


//   }
ionViewDidEnter(){
  this.plotSimpleBarChart();
}
  plotSimpleBarChart(){
    HighCharts.chart('highcharts', {      chart: {
      type: 'bar',
      
    },
    title: {
      text: 'Harry Daily P&L ',
       
    },
    legend: {
      // floating: true,
      // layout: 'vertical',
      // symbolRadius: 0,
      // x: -150,
      // y: -57
      floating: true,
      // layout: 'horizonital',
      symbolRadius: 10,
      x: -18,
      y: -147
    },
    subtitle:{text:'6thApril,2020 - 10thApril,2020'},
    
    xAxis: {
  
      // categories: ['Arjun'],
      // title: {
      //   text: ' Traders',
        
        
      // }
    },
    yAxis: {
      min:-70,
      max: 150,
      labels:{
        formatter: function(){
          return this.value +'%';
        }
      },
      title: {
        text: ' Profit&Loss',
        
        
      }
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.y:.f}%'
    },
    series: [{
      dataLabels:{
        enabled: true,
        inside: true,
        // style:{fontWeight:'bolder'}
        
      },
      name: '6-apr',
      data: [100],
      
      
      type:undefined,
      
      
    }, {
      dataLabels:{
        enabled: true,
        inside: true,
        
      },
      name: '7-apr',
      data: [70],
      type:undefined
    }, {
      dataLabels:{
        enabled: true,
        inside: true,
        
      },
      name: '8-apr',
      data: [-60],

      type:undefined
    }, {
      dataLabels:{
        enabled: true,
        inside: true,
        
      },
      name: '9-apr',
      data: [80],
      type:undefined

    }, {
      dataLabels:{
        enabled: true,
        inside: true,
        
      },
      name: '10-apr',
      data: [-20],
      type:undefined

    }]
    
})
  }
  // ngOnInit() {
  //   setInterval(() => {
  //     if (this.loadProgress < 40)
  //       this.loadProgress += 1;

  //     else if (this.logo < 80)
  //       this.logo += 1;
  //     else if (this.first < 50)
  //       this.first += 1;
  //     else if (this.second < 70)
  //       this.second += 1;
  //     else if (this.third < 20)
  //       this.third += 1;
  //     else if (this.fourth < 30)
  //       this.fourth += 1;
  //     else if (this.fifth < 90)
  //       this.fifth += 1;
  //     else if (this.sixth < 100)
  //       this.sixth += 1;
  //     else if (this.seventh < 10)
  //       this.seventh += 1;
  //     else
  //       clearInterval(this.loadProgress);
  //   }, 0);
  // }
 public lot=0;
   myFunction() {
     if(this.lot<100){
     this.lot=this.lot+1;
     }
     else{
       this.lot=0;
     }
    //  alert(this.inc);    
  }
  slideOpt = {
    direction: 'vertical',
    effect: 'fade',
    slidesPerView: 6,
    spaceBetween: 1,
    pagination: {
      el: '.swiper-pagination',
    }
  }
  graph = {
    // effect: 'fade',
    // direction:'vertical',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    }
  }

  loadColumnChart() {
    this.columnChart = {
      chartType: 'LineChart',

      dataTable: [

        ['Profit', 'Arjun', { 'type': 'string', 'role': 'tooltip', 'label': 'tooltip chart' }, 
        'rakesh', { 'type': 'string', 'role': 'tooltip', 'label': 'tooltip chart' },
        'jadav',{'type': 'string','role': 'tooltip','label':'tooltip chart'}],
        // ['Profit', 'Percentage','papo'],

        // ([['X', 'Y', {'type': 'string', 'role': 'style'}],
        // ['9', 0,'point{size: 10;shape-type:square}'],
        ['20/1', 0.2, '3000', -0.2, '-500',-0.5,'-1000'],

        ['21/1', -0.1, '2000', 0.5, '+1000',-0.1,'-200'],
        ['22/1', 0.1, '6000', 0.4, '+1000',0.3,'500'],
        ['23/1', 0.2, '2000', 0.2, '+3000',0.7,'1000'],
        ['24/1', 0.5, '7000', 0.7, '+3000',1,'1500'],


        // ['Profit', 'Percentage',{'type': 'string','role': 'tooltip','label':'tooltip chart'}],
        //   // ([['X', 'Y', {'type': 'string', 'role': 'style'}],
        //   // ['9', 0,'point{size: 10;shape-type:square}'],
        //   ['20/1', 0.1,'30000'],

        //   ['21/1', -0.1,'10000'],
        //   ['22/1',0.1,'15000'],
        //   ['23/1', 0.2,'30000'],
        //   ['24/1', 0.5,'50000']
        // ['2/1', 0.3,null],
        // // [6, 3, 'point { size: 18; shape-type: star; fill-color: #a52714; }'],
        // ['3/1', 0.2,'point{size: 10;shape-type:square}']
      ],


      //opt_firstRowIsData: true,

      options: {
        pointShape: { type: 'triangle', rotation: 180 },
        // tooltip: {isHtml: true},

        title: "Rakesh's Analysis -Date-20thJan2020 to 24thJan,2020",

        curveType: 'function',
        // lineWidth: 4,
        height: 280,
        // width: 400,
        chartArea: { height: '170' },
        linewidth:200,

        series: [{ 'color': 'red' },{ 'color': 'black' },{ 'color': 'black' }],
        // intervals:{'style':'points',pointSize: 2},
        // intervals:{'lineWidth':2,'barWidth':0.5,style:'boxes'},
        legend: { position: 'bottom' },
        hAxis: {
          title: 'DATE',
          minValue: 0
        },
        vAxis: {
          title: 'PROFIT',
          format: 'percent',



        }
      },
    };
    // this.columnChart1 = {
    //   chartType: 'LineChart',

    //   dataTable: [
    //     ['Profit', 'Percentage',{'type': 'string','role': 'tooltip','label':'tooltip chart'}],
    //     // ([['X', 'Y', {'type': 'string', 'role': 'style'}],
    //     // ['9', 0,'point{size: 10;shape-type:square}'],
    //     ['20/1', 0.3,'30000'],

    //     ['21/1', -0.2,'20000'],
    //     ['22/1',0.1,'10000'],
    //     ['23/1', 0.2,'20000'],
    //     ['24/1', 0.8,'80000'],
    //     // ['2/1', 0.3,null],
    //     // // [6, 3, 'point { size: 18; shape-type: star; fill-color: #a52714; }'],
    //     // ['3/1', 0.2,'point{size: 10;shape-type:square}']
    //   ],


    //   //opt_firstRowIsData: true,

    //   options: {
    //     pointShape: {type:'triangle',rotation: 180},
    //     // tooltip: {isHtml: true},

    //     title: "Rakesh's Analysis -Date-15thJan2020 to 19thJan,2020",

    //     curveType:'function',
    //     // lineWidth: 4,
    //     height: 280,
    //     // width: 400,
    //     chartArea: { height: '200' },
    //     series:[{'color':'red'}],
    //     // intervals:{'style':'points',pointSize: 2},
    //     // intervals:{'lineWidth':2,'barWidth':0.5,style:'boxes'},
    //     legend:'none',
    //     hAxis: {
    //       title: 'DATE',
    //       minValue: 0
    //     },
    //     vAxis: {
    //       title: 'PROFIT',
    //       format: 'percent',



    //     }
    //   },
    // };


  }
}