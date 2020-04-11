import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeaListPageRoutingModule } from './idea-list-routing.module';

import { IdeaListPage } from './idea-list.page';
import { FirebaseUIModule } from 'firebaseui-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FirebaseUIModule,
    IonicModule,
    IdeaListPageRoutingModule
  ],
  declarations: [IdeaListPage]
})
export class IdeaListPageModule {}
