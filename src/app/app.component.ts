import { CluPage } from './clu/clu.page';
import { environment } from './../environments/environment.prod';
import { Component,OnInit } from '@angular/core';

import { Platform,Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AuthService,User } from './services/auth.service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { IdeaService, Idea } from 'src/app/services/idea.service';
import { Observable } from 'rxjs';
// import { environment } from 'environment';
// import { CluPage}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  
// public name:any;
// public objuser={
//   name:"",
// }
  
    public labels= ['My Balance','My Offers & Coupons','Invite Friends','My Info & Settings','Point System'];
    public appPages= [
        {
            title: 'My Profile',
            url: '/folder/Inbox',
            icon: 'mail'
        },
           {
            title: 'Weekly Leaderboard',
            url: '/categories',
            icon: 'apps'
        },
           {
            title: 'View Winners',
            url: '/offers',
            icon: 'card'
        }
        

    ];
    // userProfile(){
    //     this.menuCtrl.toggle();
    //     this.route.navigate(['my-account'])
    // }
  constructor(
  // public event: Events,
    
    private platform: Platform,
    private splashScreen: SplashScreen,
    private screenOrientation: ScreenOrientation,
    private statusBar: StatusBar,
    public angularFireAuth: AngularFireAuth,
    public authService: AuthService,
    private ideaService: IdeaService,
    // public polo:CluPage
  ) {
    this.initializeApp();
    // this.event.subscribe('userLogged',(data)=>{
      // this.objuser.name = data.name;
    // });
    // this.flower = this.ideaService.getIdeas();
  }
  ngOnInit(){
   
  }
  
  initializeApp() {
    //console.log(this.screenOrientation.type);
   
    this.platform.ready().then(() => {
      
  // this.flower = this.ideaService.getIdeas();

      this.screenOrientation.unlock();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
}
