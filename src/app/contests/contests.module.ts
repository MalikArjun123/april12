import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContestsPageRoutingModule } from './contests-routing.module';

import { ContestsPage } from './contests.page';
import { FirebaseUIModule } from 'firebaseui-angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FirebaseUIModule,
    ContestsPageRoutingModule
  ],
  declarations: [ContestsPage]
})
export class ContestsPageModule { }
