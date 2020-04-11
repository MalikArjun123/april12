import { Injectable } from '@angular/core';
import { LoadingController, AlertController, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private nav: NavController,
    private router: Router,) { }
  navigate(link: string, forward?) {
    if (forward) {
      this.nav.navigateForward('/' + link);
    } else {
      this.router.navigateByUrl('/' + link);
    }
  }
}
