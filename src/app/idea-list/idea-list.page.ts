import { Component, OnInit } from '@angular/core';
import { IdeaService, Idea } from 'src/app/services/idea.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.page.html',
  styleUrls: ['./idea-list.page.scss'],
})
export class IdeaListPage implements OnInit {

  public flower: Observable<Idea[]>;

  constructor(private router: Router,private ideaService: IdeaService,public afAuth: AngularFireAuth) {
    // this.flower = this.ideaService.getIdeas();

   }
ionViewDidEnter(){
  this.flower = this.ideaService.getIdeas();
 
}
  ngOnInit() {
  }
  logout()
  {
    firebase.auth().signOut();
    this.router.navigate(['']);
  }
  // signOut(){
  //   this.afAuth.auth.signOut().then(() =>{
  //     location.reload();
  //   });
  // }
}