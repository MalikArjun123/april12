// import { RegisterPage } from './../register/register.page';
import { Component, ViewChild,OnInit  } from '@angular/core';
//import { BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
//import { Tab2Page } from '../tab2/tab2.page';
//import { NavController } from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController } from '@ionic/angular';
// import {RegisterPage}
// import { User} from '../services/auth.service';
@Component({
  selector: 'learn-feed-page',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  //template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
})
export class Tab1Page implements OnInit {
    public folder: string;
    public demo:any;
    // user: any;
 // time: BehaviorSubject<string> = new BehaviorSubject('00:00:00');
  //timer: number;
  constructor(private fireauth: AngularFireAuth,private menuCtrl:MenuController,public router:Router,private activatedRoute: ActivatedRoute,private authService: AuthService,)
  //public navCtrl: NavController
   {
this.menuCtrl.enable(true);
    // this.fireauth.user.subscribe(user => {
    //   this.user = user;
    // });
  }
  ngOnInit(){
      this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  
       logout() {
    this.authService.logout().then(() => {
        //res => response for the user credentials
        //update the notes collection
      // this.notesService.refreshIdeaCollection(res.user.uid);
        //navigate to the list of notes
      this.router.navigate(['/loginpage']);
    

    })
  }
//     this.authService.logout().then(res =>{
// this.router.navigate(['loginpage'])
//     },err => {
//   // return firebase.auth().signOut();
//      });
  
  btnClicked(){
    console.log("btn is clicked")
    this.router.navigate(['tabs'])
  }
  //startTimer(duration: number){
  //  this.timer = duration * 60;
  // setInterval( () => {
  //    this.updateTimeValue()
   // }, 1000);
 // }
 // updateTimeValue(){
  ionViewDidEnter(){
    
    let countDownDate = new Date("Apr 15, 2020 9:00:00").getTime();
    
    // Update the count down every 1 second
    let x = setInterval(function () {

      // Get todays date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      console.log(now, "now", "countDownDate", countDownDate, "distance", distance, "days", days);

      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML =  + hours + "h "
        + minutes + "m " + seconds + "s " +"left";
      
      days=days+1;
        document.getElementById("demo1").innerHTML = days + "day " + hours + "hrs "
         +"left";
        days=days+1;
        document.getElementById("demo2").innerHTML = days + "day " + hours + "hrs "
        +"left";  
        days=days+3;
        document.getElementById("demo3").innerHTML = days + "day " + hours + "hrs "
        +"left";  
        days=days+1;
        document.getElementById("demo4").innerHTML = days + "day " + hours + "hrs "
         +"left";  
        days=days+1;
        // document.getElementById("demo5").innerHTML = days + "d " + hours + "h "
        // + minutes + "m " + seconds + "s " +"left";  

      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
      /*let hours : any = this.timer /60;
      let minutes: any = this.timer / 60;
      let seconds: any = this.timer % 60;
      hours = String('2' + Math.floor(hours)).slice(-2);
      minutes = String('0' + Math.floor(minutes)).slice(-2);
      seconds = String('0' + Math.floor(seconds)).slice(-2);
      const text = hours + 'hrs' + minutes + 'min' + seconds + 'sec' + '  left';
      this.time.next(text);
      --this.timer;
      if(this.timer < 0){
      this.startTimer(5)
    }*/
}

//openDetails() {
//this.navCtrl.push( Tab2Page);
//}
}
