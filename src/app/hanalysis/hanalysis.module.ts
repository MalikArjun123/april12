import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hanalysis } from './hanalysis.page';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { FirebaseUIModule } from 'firebaseui-angular';
 import { HPopoverPage } from '../about-popover/hpopover';
 import {ProgressBarModule} from '../progress-bar/progress-bar.module';
 //  import { ProgressBarComponent } from '../progress-bar/progress-bar';
// import { Tab2PageModule} from '../tab2/tab2.module';
// import {Tab2PageModule} from '../tab2/tab2.module';


@NgModule({
  imports: [
    IonicModule,
    ProgressBarModule,
    CommonModule,
    // Tab2PageModule,
    FirebaseUIModule,
    // Tab2PageModule,
    // ProgressBarComponent,
    // PopoverPage,
    // Tab2PageModule,
    Ng2GoogleChartsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Hanalysis }])
  ],
  declarations: [Hanalysis,HPopoverPage],
//   declarations: [Hanalysis],

   entryComponents: [HPopoverPage],
  //  exports:[ProgressBarComponent],

})
export class HanalysisPageModule {}
