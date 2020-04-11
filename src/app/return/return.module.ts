import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReturnPage } from './return.page';
import { ProgressBarComponent } from '../progress-bar/progress-bar';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ReturnPage }])
  ],
  declarations: [ReturnPage],
})
export class ReturnPageModule {}
