import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Roanalysis } from './roanalysis.page';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { FirebaseUIModule } from 'firebaseui-angular';
  import { RoPopoverPage } from '../about-popover/ropopover';
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
    RouterModule.forChild([{ path: '', component: Roanalysis }])
  ],
  declarations: [Roanalysis,RoPopoverPage],
//   declarations: [Roanalysis],

   entryComponents: [RoPopoverPage],
  //  exports:[ProgressBarComponent],

})
export class RoanalysisPageModule {}
