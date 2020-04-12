import { CluPage } from './clu/clu.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import {CountdownTimerModule} from 'angular-countdown-timer';

// import {CluPage}
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { FormsModule } from '@angular/forms';

import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from 'src/environments/environment';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

import {AngularFireDatabaseModule} from '@angular/fire/database';
import {Tab2PageModule} from '../app/tab2/tab2.module'
// import {CountdownTimer} from 'angular-countdown-timer/countdown-timer.component';
import {CountdownTimerModule} from 'angular-countdown-timer';

import { IonicStorageModule } from '@ionic/storage';


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
   
  ],
  tosUrl: '/terms',
  privacyPolicyUrl: '/privacy',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    // Tab2PageModule,
  // CountdownTimerModule,
    // CluPage,
     IonicModule.forRoot(),
      AppRoutingModule,
      FormsModule,
      IonicStorageModule.forRoot(),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AngularFirestoreModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
    ],
  providers: [
    // CountdownTimer,
    CluPage,
    StatusBar,
    ScreenOrientation,
    SplashScreen,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} },

    WebIntent

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
