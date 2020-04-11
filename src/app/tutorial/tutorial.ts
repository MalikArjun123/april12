// import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
// import { Router } from '@angular/router';

// import { ToastController,MenuController, IonSlides } from '@ionic/angular';
// import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

// import { Storage } from '@ionic/storage';
// import { async } from '@angular/core/testing';

// @Component({
//   selector: 'page-tutorial',
//   templateUrl: 'tutorial.html',
//   styleUrls: ['./tutorial.scss'],
// })
// export class TutorialPage {
//   showSkip = true;
//   ref: AngularFireList<any>;

//   months = [
//     {value: 0,name: 'January'},
//     {value: 1,name: 'February'},
//     {value: 2,name: 'March'},
//     {value: 2,name: 'April'}
//   ];
//   transaction = {
//     value: 0,
//     expense: false,
//     month: 0
//   }
//   @ViewChild('slides', { static: true }) slides: IonSlides;
//   @ViewChild('valueBarsCanvas',{static: false}) valueBarCanvas;
//   valueBarsChart: any;
// chartData = null;
//   constructor(
//     public menu: MenuController,
//     public router: Router,
//     private db: AngularFireDatabase,
//     private toastCtrl: ToastController,
//     public storage: Storage
//   ) {}

// //   startApp() {
// //     this.router
// //       .navigate(['loginpage'])
// //     .then(() => this.storage.set('ion_did_tutorial', true));
      


// //   }
//  ionViewDidLoad(){
//    this.ref = this.db.list('/transactions');
// this.ref.stateChanges().subscribe(result => {
//   if(this.chartData){
//     this.updateCharts(result);
//   }
//   else{
//     this.createCharts(result);
//   }
// })
//  }
//  addTransaction(){
//    this.ref.push(this.transaction).then(async() =>{
//      this.transaction = {
//        value: 0,
//        expense: false,
//        month: 0
//      };
//      let toast = await this.toastCtrl.create({
//        message: 'new transaction added',
//        duration: 3000
//      });
//      return await toast.present();
//    });
//  }

//   onSlideChangeStart(event) {
//     event.target.isEnd().then(isEnd => {
//       this.showSkip = !isEnd;
//     });
//   }

// //   ionViewWillEnter() {
// //     this.storage.get('ion_did_tutorial').then(res => {
// //      if (res === true) {
// //       this.router.navigate(['loginpage'])
// //      }
// //     });

// //     this.menu.enable(false);
// //   }

//   ionViewDidLeave() {
//     // enable the root left menu when leaving the tutorial page
//     this.menu.enable(true);
//   }
   
//   createCharts(data){

//   }
//   updateCharts(data){

//   }
// }

import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.html',
  styleUrls: ['./tutorial.scss'],
})
export class TutorialPage implements OnInit {
  public slideOpts: object = {
    effect: 'flip',
  };
  public slides: Array<any>;

  constructor(
    private splashScreen: SplashScreen,
    private platform: Platform,
    private route: Router,
    private menuCtrl: MenuController
  ) {

    this.menuCtrl.enable(false);
    this.slides = environment.APP_SLIDES;
  }

  ngOnInit() {
  }

  sliderChanges(event: any) {
    console.log('sliderChanges', event);
  }

  skip() {
    console.log('skip slides');
    this.route.navigate(['loginpage']);
  }

//   ionViewDidEnter() {
//     this.menuCtrl.enable(false, 'start');
//     this.menuCtrl.enable(false, 'end');
//     this.platform.ready().then(() => {
//       this.splashScreen.hide();
//     });
//   }


}
