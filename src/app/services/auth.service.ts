import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
// import { Events} from '@ionic/angular';s
// import { IdeaService } from './idea.service';

export class AuthInfo {
  constructor(public $uid: string) { }

  isLoggedIn() {
    return !!this.$uid;
  }
}

export interface User {
  id?: string,
  name: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  static UNKNOWN_USER = new AuthInfo(null);
  public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);
  private userCollection: AngularFirestoreCollection<User>;
  private users: Observable<User[]>
  
  constructor(private db: AngularFirestore,
  // public event: Events,
    private afAuth: AngularFireAuth) { 
    this.userCollection = db.collection<User> ('users');
    this.users = this.userCollection.snapshotChanges().pipe(
      map (actions => {
        return actions.map (a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ... data};
        })
      })
    )
  }
  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password).then(
        res => {
          console.log("User id after registration = "+res.user.uid);
          console.log("user name ="+ value.name);
      //  this.event.publish('userLogged',value.name);

          let user: User = {
            email: value.email,
            id: res.user.uid,
           name: value.name
          };
          this.userCollection.doc(res.user.uid).set(user);
          resolve(res);
        }, err => {
          reject(err);
        }
      )
    })
  }
  login(value) {
    return firebase.auth().signInWithEmailAndPassword(value.email, value.password);
  }
  logout() {
    return firebase.auth().signOut();
  }
  getCurrentUser() {
    if(firebase.auth().currentUser) {
      return firebase.auth().currentUser;
    } else {
      return null;
    }
  // return firebase.auth().updateCurrentUser(value.name);
  }
  // public loginWithGoogle(accessToken, accessSecret) {
  //   // eslint-disable-next-line multiline-ternary
  //   const credential = accessSecret ? firebase.auth.GoogleAuthProvider
  //     .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
  //       .credential(accessToken);
  //   return this.afAuth.auth.signInWithCredential(credential);
  // }
  // public googleLogin(): Promise<any> {
  //   return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }
  // public createSocialLoginUser(user): Promise<any> {
  //   this.authInfo$.next(new AuthInfo(user.uid));
  //   // return this.userDataServ.create({
  //   //   email: user.email,
  //   //   id: user.uid,
  //   //   username: user.displayName
  //   // });
  // }
}
