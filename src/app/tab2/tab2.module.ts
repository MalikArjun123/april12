import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import {CountdownTimerModule} from 'ngx-countdown-timer';
import {CountdownTimer} from 'angular-countdown-timer/countdown-timer.component'
// const _counterReducer = createReducer(initialState,on(increment, state => state + 1),
// on(decrement, state => state - 1),on(reset, state => 0),);
// export function counterReducer(state, action){
//   return _counterReducer(state,action)
// }
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    // StoreModule.forRoot({count:counterReducer}),
    CountdownTimerModule.forRoot(),
    ProgressBarModule,
    // Tab1PageModule,
    // RanalysisPageModule,
    FormsModule,
    NgCircleProgressModule,
    // // {
    // //   // "backgroundGradient": true,
    // //   // "backgroundColor": "#ffffff",
    // //   // "backgroundGradientStopColor": "#c0c0c0",
    // //   // "backgroundPadding": -10,
    // //   // "radius": 60,
    // //   // "maxPercent": 100,
    // //   // "outerStrokeWidth": 10,
    // //   // "outerStrokeColor": "#61A9DC",
    // //   // "outerStrokeGradientStopColor": "#ee4d4d",
    // //   // "innerStrokeWidth": 0,
    // //   // "subtitleColor": "#444444",
    // //   // "showInnerStroke": false,
    // //   // "startFromZero": false
    // // }
    // ),
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page],
  // exports:[    CountdownTimer ],
  // entryComponents: [CountdownTimer],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab2PageModule {}
