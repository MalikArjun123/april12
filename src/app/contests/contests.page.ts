import { UtilService } from './../util.service';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { IdeaService, Idea } from 'src/app/services/idea.service';
// import {AuthService}
// import {UtilService}
@Component({
  selector: 'app-contests',
  templateUrl: 'contests.page.html',
  styleUrls: ['contests.page.scss']
})
export class ContestsPage {
  public flower: Observable<Idea[]>;

  public sidemenuLayout1: Array<any>;
  user: string;
  public sidemenu = 5;
  // displayName:any;

    constructor(public router:Router,public util: UtilService,private authService:AuthService,private ideaService: IdeaService,public afAuth: AngularFireAuth) {
    this.sidemenuLayout1 = environment.SIDEMENU_LAYOUTS;
    this.afAuth.user.subscribe(user => {
      if(user != null){
      this.user = user.displayName;
      }
    });
    }
    ionViewDidEnter(){
  this.flower = this.ideaService.getIdeas();
     
    }
    logout() {
      console.log('logout');
      this.authService.logout().then(() => {
        // this.util.navigate('loginpage', false);
      this.router.navigate(['/loginpage']);

      });
    }
    // signOut(){
    //   this.afAuth.auth.signOut().then(() =>{
    //     location.reload();
    //   });
    // }
  
 
}

