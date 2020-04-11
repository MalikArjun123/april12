import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ranalysis } from './ranalysis.page';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { FirebaseUIModule } from 'firebaseui-angular';
 import { PopoverPage } from '../about-popover/about-popover';
 import {ProgressBarModule} from '../progress-bar/progress-bar.module';
 //  import { ProgressBarComponent } from '../progress-bar/progress-bar';
// import { Tab2PageModule} from '../tab2/tab2.module';
// import {Tab2PageModule} from '../tab2/tab2.module';
// import {AboutPopoverModule} from '../about-popover/about-popover.module';


@NgModule({
  imports: [
    IonicModule,
    ProgressBarModule,
    CommonModule,
    // PopoverPage,
    // AboutPopoverModule,
    // Tab2PageModule,
    FirebaseUIModule,
    // Tab2PageModule,
    // ProgressBarComponent,
    // PopoverPage,
    // Tab2PageModule,
    Ng2GoogleChartsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Ranalysis }])
  ],
  declarations: [Ranalysis,PopoverPage],
   entryComponents: [PopoverPage],
//    exports:[ProgressBarComponent],

})
export class RanalysisPageModule {}
