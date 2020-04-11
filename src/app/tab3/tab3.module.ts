import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { HighchartsChartModule} from 'highcharts-angular';
import {CountdownTimerModule} from 'angular-countdown-timer';

// import * as HighCharts from 'highcharts';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CountdownTimerModule,
  HighchartsChartModule,
    Ng2GoogleChartsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
