import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Analysis } from './analysis.page';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { FirebaseUIModule } from 'firebaseui-angular';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FirebaseUIModule,

    Ng2GoogleChartsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Analysis }])
  ],
  declarations: [Analysis]
})
export class AnalysisPageModule {}
