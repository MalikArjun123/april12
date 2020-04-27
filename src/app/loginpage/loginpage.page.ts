import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Events,Platform,NavController, AlertController,MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/auth';
import {UtilService} from '../util.service';
 import { IdeaService } from '../services/idea.service';
 import { SplashScreen } from '@ionic-native/splash-screen/ngx';
@Component({
  selector: 'app-loginpage',
  templateUrl: 'loginpage.page.html',
  styleUrls: ['loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  public event: Events
  validations_form: FormGroup;
  errorMessage: string = "";

  constructor(private navCtrl: NavController,
              private alertCtrl: AlertController,
              private authService: AuthService,
              private platform: Platform,
              private formBuilder: FormBuilder,
              private router: Router,
              private splashScreen: SplashScreen,
              private menuCtrl: MenuController,
              private notesService: IdeaService,
              // private afs:AngularFireAuth
              // private notesService: IdeaService
              public util:UtilService,
              private authServ: AuthService
              ) {}
  ngOnInit() {
    
    this.validations_form  = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    });
  }
  ionViewDidEnter() {
    // this.menuCtrl.enable(false, 'start');
    // this.menuCtrl.enable(false, 'end');
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }
  validation_messages = {
    'email':[ 
      {type:'required', message:'Email is required'},
      {type:'pattern', message:'Please enter a valid email address'},
    ],
    'password': [
      {type:'required', message:'You must provide a password'},
      {type:'minlength', message:'The minimum length of your password must be 6'},
    ]
  }
  login(value) {
    this.util.openLoader();

    this.authService.login(value).then(res => {

      if (res.user) {
        console.log('{authService.getCurrentUser(value)}');
        //res => response for the user credentials
        //update the notes collection
       this.notesService.refreshIdeaCollection(res.user.uid);
      //  this.name=this.afs.auth.currentUser.email;
        //navigate to the list of notes
      this.router.navigate(['contests']);}
    })
    .catch(err => {
      console.log(`login failed ${err}`);
      this.errorMessage = err.message;
    }).then(el => this.util.closeLoading());
  }
  // googleLogin($event: any) {
  //   if ($event.isBrowser) {
  //     this.authServ.googleLogin().then(success => {
  //       console.log('success in google login', success);
  //       this.authServ.registerUser(success.user);
  //       this.router.navigate(['contests']);
  //     }).catch(err => {
  //       console.log(err.message, 'error in google login');
  //       this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
  //     });
  //   } else {
  //     this.authServ.loginWithGoogle($event.idToken, $event.accessToken).then(success => {
  //       console.log('success in google login', success);
  //       this.authServ.registerUser(success.user);
  //       // this.util.navigate('contests', false);
  //       this.router.navigate(['contests']);

  //     }).catch(err => {
  //       console.log(err.message, 'error in google login');
  //       this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
  //     });
  //   }
  // }

  

}
