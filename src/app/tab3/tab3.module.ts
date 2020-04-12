import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { HighchartsChartModule} from 'highcharts-angular';
import {CountdownTimerModule} from 'ngx-countdown-timer';
// import {CountdownTimer} from 'angular-countdown-timer/countdown-timer.component'

// import * as HighCharts from 'highcharts';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CountdownTimerModule.forRoot(),
  HighchartsChartModule,
    Ng2GoogleChartsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page],
  // exports:[    CountdownTimer ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]


})
export class Tab3PageModule {}
