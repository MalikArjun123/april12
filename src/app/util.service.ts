import { Injectable } from '@angular/core';
import { LoadingController, AlertController, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private nav: NavController,public loadingController:LoadingController,public toastController:ToastController,
    private router: Router,) { }
    async openLoader() {
      const loading = await this.loadingController.create({
        message: 'Please Wait ...',
        duration: 2000
      });
      await loading.present();
    }
    async closeLoading() {
      // eslint-disable-next-line no-return-await
      return await this.loadingController.dismiss();
    }
  navigate(link: string, forward?) {
    if (forward) {
      this.nav.navigateForward('/' + link);
    } else {
      this.router.navigateByUrl('/' + link);
    }
  }
  async presentToast(message, showButton, position, duration) {
    const toast = await this.toastController.create({
      message,
      buttons:   [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Close clicked');
          }
        }
      ],
      position,
      duration
    });
    toast.present();
  }

}
