import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
// import {RanalysisPageModule} from '../ranalysis/ranalysis.module';
// import { ProgressBarComponent } from '../progress-bar/progress-bar';
import {ProgressBarModule} from '../progress-bar/progress-bar.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
// import { PopoverPage } from '../about-popover/about-popover';
import {Tab1PageModule} from '../tab1/tab1.module';
import { Tab1Page } from '../tab1/tab1.page';
// import {CountdownTimerModule} from 'angular-countdown-timer';
import {CountdownTimer} from 'angular-countdown-timer/countdown-timer.component.d.ts'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    // CountdownTimerModule,
    ProgressBarModule,
    // Tab1PageModule,
    // RanalysisPageModule,
    FormsModule,
    NgCircleProgressModule.forRoot(
    {
      // "backgroundGradient": true,
      // "backgroundColor": "#ffffff",
      // "backgroundGradientStopColor": "#c0c0c0",
      // "backgroundPadding": -10,
      // "radius": 60,
      // "maxPercent": 100,
      // "outerStrokeWidth": 10,
      // "outerStrokeColor": "#61A9DC",
      // "outerStrokeGradientStopColor": "#ee4d4d",
      // "innerStrokeWidth": 0,
      // "subtitleColor": "#444444",
      // "showInnerStroke": false,
      // "startFromZero": false
    }
    ),
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page,CountdownTimer],
  // exports:[ProgressBarComponent],
  entryComponents: [],
})
export class Tab2PageModule {}
