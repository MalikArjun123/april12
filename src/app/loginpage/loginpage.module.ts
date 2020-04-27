import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
// import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginpagePage } from './loginpage.page';
// import {GoogleLoginComponent} from '../google-login/google-login.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginpagePage
      }
    ])
  ],
  declarations: [LoginpagePage,
    // GoogleLoginComponent,
  ]
})
export class LoginpagePageModule {}
