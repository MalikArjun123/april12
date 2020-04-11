import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AuthService } from '../services/auth.service';

export interface Idea {
  id?: string,
  name: string,
  notes: string
}

@Injectable({
  providedIn: 'root'
})

export class IdeaService {

  private flower: Observable<Idea[]>;
  
  private ideaCollection: AngularFirestoreCollection<Idea>;

  constructor(private authService: AuthService,private afs: AngularFirestore,private afAuth: AngularFireAuth) {
    let currentUser = this.authService.getCurrentUser();
if(this.afAuth.auth.currentUser){
  let user = this.afAuth.auth.currentUser.uid;
}
if (currentUser){


  
  this.refreshIdeaCollection(currentUser.uid)
}
  
  }
  refreshIdeaCollection(userId){
    this.ideaCollection = this.afs.collection('users').doc(userId).collection<Idea>('flower');
    this.flower = this.ideaCollection.snapshotChanges().pipe(
      map((actions: any) => {
        return actions.map(a => { 
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })})
      
    )

  }
// getCurrentUser(){
//   if(firebase.auth().currentUser) {
//     return firebase.auth().currentUser;
//   } else {
//     return null;
//   }
// }

  getIdeas(): Observable<Idea[]> {
    return this.flower;
  }

  getIdea(id: string): Observable<Idea> {

    return this.ideaCollection.doc<Idea>(id).valueChanges().pipe(
      take(1),
      map((idea: any) => {
        idea.id = id;
        return idea
      })
    );
  }

  addIdea(idea: Idea): Promise<DocumentReference> {
    return this.ideaCollection.add(idea);
  }

  updateIdea(idea: Idea): Promise<void> {
    return this.ideaCollection.doc(idea.id).update({ name: idea.name, notes: idea.notes });
  }

    deleteIdea(id: string): Promise<void> {
    return this.ideaCollection.doc(id).delete();
  }
}