import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { ToastController, NavController } from '@ionic/angular';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { AngularFireAuth } from '@angular/fire/auth';
import { IonSlides } from '@ionic/angular';
import * as HighCharts from 'highcharts';


declare var google;

@Component({
  selector: 'app-analysis',
  templateUrl: 'analysis.page.html',
  styleUrls: ['analysis.page.scss']
})
export class Analysis {
  public columnChart: GoogleChartInterface;
  
  public columnChart1: GoogleChartInterface;
  public columnChart2: GoogleChartInterface;
  public barChart: GoogleChartInterface;
  @ViewChild('slides', { static: true }) slides: IonSlides;
  segment:string;

  constructor(public afAuth: AngularFireAuth) {}

  ionViewDidEnter() {
    this.loadColumnChart();
    this.plotDynamicSplineChart();

    
  }
  graph = {
    // effect: 'fade',
    // direction:'vertical',
    slidesPerView: 1,
    pagination:{
      el:'.swiper-pagination',
    }
  }
  plotDynamicSplineChart() {
    let myChart = HighCharts.chart('dynamicSpline', {
      chart: {
        type: 'spline',
        animation: true, // don't animate in old IE
        marginRight: 10,
        events: {
          
          load: function () {
            // function sum(array) {
            //   return array.reduce((sum, num) => sum + num+1, 0);
            // }
            // function count(n) {
            //   if (n === 1) {
            //     return [1];
            //   } else {
            //     var numbers = count(n - 1); 
            //     numbers.push(n);
            //     return numbers;
            //   }
            // }
            var n = 0;
            function increment(){
              n++;
              if (n==100)
              {
                for(n==100;n>1;n--)
                {
  return n;
                }
              }
            
             return n;
             
            }
            // set up the updating of the chart each second
            var series = this.series[0];
            setInterval(function () {
              var x = (new Date()).getTime(), // current time
             
                y = Math.floor(Math.random() * 201) - 100;
              // y=Math.random();
                // y=increment();
                  
              series.addPoint([x, y], true, true);
            }, 1000);
          }
        }
      },
  
      time: {
        useUTC: false
      },
    
  
      title: {
        text: 'Live trader data'
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },
      yAxis: {
        title: {
          text: 'profit'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
      },
      legend: {
        enabled: true
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'Rakesh',
        type: undefined,
        data: (function () {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;
  
          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.random()
            });
          }
          return data;
        }())
      }]
  
    });
  }
  loadColumnChart() {
    this.columnChart = {
      chartType: 'LineChart',
    
      dataTable: [
        ['Profit', 'Percentage',{'type': 'string','role': 'tooltip','label':'tooltip chart'}],
        // ([['X', 'Y', {'type': 'string', 'role': 'style'}],
        // ['9', 0,'point{size: 10;shape-type:square}'],
        ['9', 0,'a'],

        ['10', -0.1,'BUY:YESBANK,SELL:YESBANK'],
        ['11',0.1,'SELL(45)@INDUSINDBK@1417.7;BUY(45)@INDUSINDBK@1415.7'],
        ['12', 0.2,'BUY(450)@YESBANK@40'],
        ['1', -0.1,null],
        ['2', 0.3,null],
        // [6, 3, 'point { size: 18; shape-type: star; fill-color: #a52714; }'],
        ['3', 0.2,'point{size: 10;shape-type:square}']
      ],
      
      //opt_firstRowIsData: true,
      
      options: {
        pointShape: {type:'triangle',rotation: 180},
        // tooltip: {isHtml: true},

        title: "Rakesh's analysis -Date-15thJan,2020",
        
        curveType:'function',
        // lineWidth: 4,
        height: 500,
        // width: 400,
        chartArea: { height: '400' },
        series:[{'color':'green'}],
        // intervals:{'style':'points',pointSize: 2},
        // intervals:{'lineWidth':2,'barWidth':0.5,style:'boxes'},
        legend:'none',
        hAxis: {
          title: 'TIME',
          minValue: 0
        },
        vAxis: {
          title: 'PROFIT',
          format: 'percent',
          
          

        }
      },
    };
    this.columnChart1 = {
      chartType: 'LineChart',
      dataTable: [
        ['Profit', 'Percentage'],
        ['9', 0],
        ['10', -0.05],
        ['11',0.15],
        ['12', 0.1],
        ['1', -0.2],
        ['2', 0.3],
        ['3', 0.3]
      ],
      //opt_firstRowIsData: true,
      
      options: {
        title: "Jacob's Analysis -Date-15thJan2020",
        // curveType:'function',
        // lineWidth: 4,
        height: 500,
        // width: 400,
        chartArea: { height: '400' },
        series:[{'color':'green'}],
        // intervals:{'style':'points',pointSize: 2},
        // intervals:{'lineWidth':2,'barWidth':0.5,style:'boxes'},
        legend:'none',
        hAxis: {
          title: 'TIME',
          minValue: 0
        },
        vAxis: {
          title: 'PROFIT',
          format: 'percent',
          
          

        }
      },
    };
    this.columnChart2 = {
      chartType: 'LineChart',
      dataTable: [
        ['Profit', 'Percentage'],
        ['9', 0],
        ['10', 0.1],
        ['11',-0.2],
        ['12', 0.2],
        ['1', 0.4],
        ['2', 0.5],
        ['3', 0.5]
      ],
      //opt_firstRowIsData: true,
      
      options: {
        title: "Arjun's analysis -Date-15thJan2020",
        // curveType:'function',
        // lineWidth: 4,
        height: 500,
        // width: 400,
        chartArea: { height: '400' },
        series:[{'color':'green'}],
        // intervals:{'style':'points',pointSize: 2},
        // intervals:{'lineWidth':2,'barWidth':0.5,style:'boxes'},
        legend:'none',
        hAxis: {
          title: 'TIME',
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