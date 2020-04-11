// import { User } from './../services/auth.service';
import { Component } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { IdeaService, Idea } from 'src/app/services/idea.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import {User} from 'src/app/services/auth.service';
@Component({
  selector: 'app-clu',
  templateUrl: 'clu.page.html',
  styleUrls: ['clu.page.scss']
})
export class CluPage {
  // public bolo: Observable<User[]>;
  segment:string;
  public flower: Observable<Idea[]>;
public name:string;
// public bolo=name;
 public abc=0;
 user: any;
ionViewDidEnter(){
  this.flower = this.ideaService.getIdeas();
  if(this.afs.auth.currentUser){
  this.name= this.afs.auth.currentUser.email;
  }
}
  constructor(private ideaService: IdeaService,private afs:AngularFireAuth) {
    this.segment="fifty";
    this.afs.user.subscribe(user => {
      this.user = user;
    });
  }
  

}
