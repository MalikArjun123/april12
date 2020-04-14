import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { NavController } from '@ionic/angular';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

// import { ViewChild ,ElementRef } from '@angular/core';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
date = new Date('2020-04-15T09:30:00');

  public columnChart: GoogleChartInterface;
  chart;
  charti;
updateFomInput = false;
Highcharts = Highcharts;
chartConstructor = 'chart';
chartConstructori = 'chart';

chartCallback;
chartOptions={
chart: {
  type: 'column',
  height:500,
    width:400,
    backgroundColor: '#efefef',
  // inverted: false
},
title: {
  text: 'Daily P&L percentage',
   
},
// height: 180,
// width:600,
// // width: 400,
// chartArea: { height: '100',width:'200' },
subtitle:{text:'20thJAN,2020 - 24thJAN,2020'},

xAxis: {
  categories: ['Arjun', 'Rakesh', 'Jacob','Harry','smarty'],
  title: {
    text: ' Traders',
    
    
  }
},
yAxis: {
  min:-100,
  max: 200,
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
  name: 'monday',
  data: [100, 50, -40,20,30],
  type:undefined
  
}, {
  name: 'tuesday',
  data: [50, 170, -20,20,30],
type:undefined
}, {
  name: 'wedesday',
  data: [130, 10, 200,20,30],
  type:undefined
}, {
  name: 'thursday',
  data: [-50, 100, 30,20,30],
  type:undefined

}, {
  name: 'friday',
  data: [50, 70, 70,20,30],
  type:undefined

}]

}
chartOptionsi={
  chart: {
    type: 'bar',
    // inverted: true
    height:500,
    width:400,
    backgroundColor: '#efefef',
  },
  title: {
    text: 'Daily P&L percentage',
     
  },
  column:{
maxPointWidth:50,
  },
  // width:800,
  // height: 180,
  // width:600,
  // // width: 400,
  // chartArea: { height: '100',width:'200' },
  subtitle:{text:'24thJAN,2020'},
  
  xAxis: {
    categories: ['Arjun', 'Rakesh','Rohit', 'Jacob','Harry','smarty'],
    title: {
      text: ' Traders',
      
      
    }
  },
  yAxis: {
    min:-40,
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
    name: 'monday',
    color:'green',
    data: [100,80, 50, 30,20,-40],
    type:undefined
    
  }]
  
  }


segment:string;
  constructor(public navCtrl:NavController) {
    this.loadColumnChart();
  
    const self = this;
    this.chartCallback = chart => {
      self.chart = chart;
    }

  }
  ionViewDidEnter() {
    // this.plotSimpleBarChart();
    this.loadColumnChart();
    this.segment="day";
  

  }
  // plotDynamicSplineChart() {
  //   let myChart = HighCharts.chart('dynamicSpline', {
  //     chart: {
  //       type: 'bar',
  //       // animation: true, // don't animate in old IE
       
  //     },
  
    
  
  //     title: {
  //       text: 'Live trader data'
  //     },
  //     xAxis: {
  //      categories:['Apples','Bananas','Oranges']
  //     },
  //     yAxis: {
  //       title: {
  //         text: 'Fruit eaten'
  //       }
       
  //     },
  
   
      
  //     series: [{
  //       name: 'Arjun',
  //       type: undefined,
  //       data: [1,0,4]
  //     },{
  //       name: 'Arjun',
  //       type: undefined,
  //       data: [1,0,4]
  //     }]
  
  //   })
  // }
//   plotSimpleBarChart() {
//     let myChart = HighCharts.chart('highchars', {      chart: {
//         type: 'column',
//         // inverted: false
//       },
//       title: {
//         text: 'Daily P&L percentage',
         
//       },
//       subtitle:{text:'20thJAN,2020 - 24thJAN,2020'},
      
//       xAxis: {
//         categories: ['Arjun', 'Rakesh', 'Jacob','Harry','smarty'],
//         title: {
//           text: ' Traders',
          
          
//         }
//       },
//       yAxis: {
//         min:-100,
//         max: 200,
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
//         data: [100, 50, -40,20,30],
//         type:undefined
        
//       }, {
//         name: 'tuesday',
//         data: [50, 170, -20,20,30],
//       type:undefined
//       }, {
//         name: 'wedesday',
//         data: [130, 10, 200,20,30],
//         type:undefined
//       }, {
//         name: 'thursday',
//         data: [-50, 100, 30,20,30],
//         type:undefined

//       }, {
//         name: 'friday',
//         data: [50, 70, 70,20,30],
//         type:undefined

//       }]
      
// })
//   }


loadColumnChart(){
  this.columnChart = {
    chartType: 'LineChart',
    dataTable: [

      ['Profit', 'Arjun', { 'type': 'string', 'role': 'tooltip', 'label': 'tooltip chart' }, 
      'rakesh', { 'type': 'string', 'role': 'tooltip', 'label': 'tooltip chart' },
      'jacob',{'type': 'string','role': 'tooltip','label':'tooltip chart'},
      'rohit',{'type': 'string','role': 'tooltip','label':'tooltip chart'},
      'harry',{'type': 'string','role': 'tooltip','label':'tooltip chart'},
      'smarty',{'type': 'string','role': 'tooltip','label':'tooltip chart'},

      // 'raman',{'type': 'string','role': 'tooltip','label':'tooltip chart'}
    ],
      // ['Profit', 'Percentage','papo'],

      // ([['X', 'Y', {'type': 'string', 'role': 'style'}],
      // ['9', 0,'point{size: 10;shape-type:square}'],
      ['20/1', 0.2, '3000', -0.2, '-500',-0.5,'-1000',0.3,'-1000',0.4,"4000",0.7,"7000"],

      ['21/1', -0.1, '2000', 0.5, '+1000',-0.1,'-200',0.5,'-1000',0.8,"8000",1.3,"13000"],
      ['22/1', 0.1, '6000', 0.4, '+1000',0.3,'500',-0.2,'-1000',-0.2,"-2000",0.2,"2000"],
      ['23/1', 0.2, '2000', 0.2, '+3000',0.7,'1000',-0.5,'-1000',0.6,"6000",-0.5,"-5000"],
      ['24/1', 0.5, '7000', 0.7, '+3000',1,'1500',0.7,'-1000',0.3,"3000",0.5,"5000"],


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
// orientation:'vertical',

      pointShape: { type: 'triangle', rotation: 180 },
      // tooltip: {isHtml: true},

      title: "Analysis -Date-20thJan2020 to 24thJan,2020",

      curveType: 'function',
      // lineWidth: 4,
      height: 580,
      width:600,
      // width: 400,
      chartArea: { height: '400',width:'200' },
      linewidth:900,

      series: [{ 'color': 'red' },{ 'color': 'orange' },{ 'color': 'black' }],
      // intervals:{'style':'points',pointSize: 2},
      // intervals:{'lineWidth':2,'barWidth':0.5,style:'boxes'},
      legend: { layout:'horizonital',align:'top',vericalAlign:'top',
      textStyle:{fontSize:19}},
      is3D:true,
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
}
}
