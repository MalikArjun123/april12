import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { ActivatedRoute } from '@angular/router';
import { Ranalysis } from '../ranalysis/ranalysis.page';
import { Observable } from 'rxjs';
import {JCartService} from '../services/jcart.service';

// declare module '*';
// declare var RazorpayCheckout: any;
@Component({
  template: `
  <div >
    <ion-list >
    <ion-card button  color="danger" margin-bottom *ngIf="cartService.productQty === 1">
      
    <div>
    
    <ion-header><ion-title text-center> My Cart</ion-title></ion-header>
    <ion-card padding color="light" style="height:auto;width:auto">
    <ion-text color="dark"><h5>Lot No:<ion-col></ion-col>  {{cartService.productQty}}</h5></ion-text>
    <ion-text color="dark"><h5>Trader-Jacob</h5></ion-text>
    
    
  
    <ion-button (click)="upi()" no-padding color="success">Checkout <ion-col></ion-col><ion-badge>₹100</ion-badge></ion-button>
    
    </ion-card>


</div>
    
      
    </ion-card>
    <ion-card button  color="danger" margin-bottom *ngIf="cartService.productQty === 2">
      
      <div>
      
      <ion-header><ion-title text-center> My Cart</ion-title></ion-header>
      <ion-card padding color="light" style="height:auto;width:auto">
      <ion-text color="dark"><h5>Lot No:<ion-col></ion-col>  {{cartService.productQty}}</h5></ion-text>
      <ion-text color="dark"><h5>Trader-Jacob</h5></ion-text>
      
      
    
      <ion-button (click)="upi2()" no-padding color="success">Checkout <ion-col></ion-col><ion-badge>₹200</ion-badge></ion-button>
      
      </ion-card>


</div>
      
        
      </ion-card>
      <ion-card button  color="danger" margin-bottom *ngIf="cartService.productQty === 3">
      
      <div>
      
      <ion-header><ion-title text-center> My Cart</ion-title></ion-header>
      <ion-card padding color="light" style="height:auto;width:auto">
      <ion-text color="dark"><h5>Lot No:<ion-col></ion-col>  {{cartService.productQty}}</h5></ion-text>
      <ion-text color="dark"><h5>Trader-Jacob</h5></ion-text>
      
      
    
      <ion-button (click)="upi3()" no-padding color="success">Checkout <ion-col></ion-col><ion-badge>₹300</ion-badge></ion-button>
      
      </ion-card>


</div>
      
        
      </ion-card>
      <ion-card button  color="danger" margin-bottom *ngIf="cartService.productQty === 4">
      
      <div>
      
      <ion-header><ion-title text-center> My Cart</ion-title></ion-header>
      <ion-card padding color="light" style="height:auto;width:auto">
      <ion-text color="dark"><h5>Lot No:<ion-col></ion-col>  {{cartService.productQty}}</h5></ion-text>
      <ion-text color="dark"><h5>Trader-Jacob</h5></ion-text>
      
      
    
      <ion-button (click)="upi4()" no-padding color="success">Checkout <ion-col></ion-col><ion-badge>₹400</ion-badge></ion-button>
      
      </ion-card>


</div>
      
        
      </ion-card>
      <ion-card button  color="danger" margin-bottom *ngIf="cartService.productQty === 5">
      
      <div>
      
      <ion-header><ion-title text-center> My Cart</ion-title></ion-header>
      <ion-card padding color="light" style="height:auto;width:auto">
      <ion-text color="dark"><h5>Lot No:<ion-col></ion-col>  {{cartService.productQty}}</h5></ion-text>
      <ion-text color="dark"><h5>Trader-Jacob</h5></ion-text>
      
      
    
      <ion-button (click)="upi5()" no-padding color="success">Checkout <ion-col></ion-col><ion-badge>₹500</ion-badge></ion-button>
      
      </ion-card>



</div>
      
        
      </ion-card>
      <ion-card button  color="danger" margin-bottom *ngIf="cartService.productQty > 5">
      
      <div>
      
      <ion-header><ion-title text-center> My Cart</ion-title></ion-header>
      <ion-card padding color="light" style="height:auto;width:auto">
      <ion-text color="dark"><h5>only 5 lots are allowed as of now</h5></ion-text>
      <ion-text color="dark"><h5>Trader-Jacob</h5></ion-text>
      
      
    
      
      </ion-card>
      


</div>
      
        
      </ion-card>
    </ion-list>
    </div>
  `
})
export class JPopoverPage {
  // public productQty:Ranalysis;
// public productty=this.cart.productQty;
// public productQty=Ranalysis;
// productQty: Ranalysis;
// public cart: Observable<Ranalysis>;
// public productQty = 3;
  constructor(private route: ActivatedRoute,public popoverCtrl: PopoverController,  public cartService: JCartService,private webIntent: WebIntent) {
    // storage.get('productQty').then((parameter) => {
    //   console.log('Received Parameter: ' + parameter);
    // });
  }
  // <ion-item button (click)="upi()" color="light" margin-bottom="1px" size="small" expand="fill">
  // <ion-item button expand="full" color="success" (click)="payWithRazor()">Pay with RazorPay
//   sub = this.route.params.subscribe(params => {
//     this.productQty = params['productQty']; 
//     console.log('productQty'+ this.productQty);
// });
  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }
  
  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  } 
  // payWithRazor() {
  //   var options = {
  //     description: 'Credits towards consultation',
  //     image: 'https://i.imgur.com/3g7nmJC.png',
  //     currency: 'INR', // your 3 letter currency code
  //     key:'rzp_test_eWIc7d91a0tchG', // your Key Id from Razorpay dashboard
  //     amount: 100, // Payment amount in smallest denomiation e.g. cents for USD
  //     name: 'foo',
  //     prefill: {
  //       email: 'edara.chinnu1996@gmail.com',
  //       contact: '8198892727',
  //       name: 'tarper'
  //     },
  //     theme: {
  //       color: '#F37254'
  //     },
  //     modal: {
  //       ondismiss: function () {
  //         alert('dismissed')
  //       }
  //     }
  //   };

  //   var successCallback = function (payment_id) {
  //     alert('payment_id: ' + payment_id);
  //   };

  //   var cancelCallback = function (error) {
  //     alert(error.description + ' (Error ' + error.code + ')');
  //   };

  //   RazorpayCheckout.open(options, successCallback, cancelCallback);
  // }
  // public lot=0;
  // slot(){
  //   if(this.lot<100){
  //     this.lot=this.lot+1;
  //     }
  //     else{
  //       this.lot=0;
  //     }
  // }
  upi() {
    const options = {
      action: this.webIntent.ACTION_VIEW,
      //url: 'upi://pay?pa=chandraedara1993@okicici&pn=EDARA CHANDRAKAR&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894398cndhcd23&am=10&cu=INR&tn=App Payment'
      url: 'upi://pay?pa=chandraedara1993@okicici&pn=edara%20chandrakar&tr=4894398cndhcd23&tn=mystar%20store&am=10&cu=INR'

    }

    this.webIntent.startActivityForResult(options).then(
      onSuccess => {
        console.log("Success", onSuccess);
        this.cartService.pay = 2;

      },
      onError => {
        console.log("error", onError);
      });
  }
  upi2() {
    
    const options = {
      action: this.webIntent.ACTION_VIEW,
      //url: 'upi://pay?pa=chandraedara1993@okicici&pn=EDARA CHANDRAKAR&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894398cndhcd23&am=10&cu=INR&tn=App Payment'
      // url: 'upi://pay?pa=chandraedara1993@okicici&pn=edara%20chandrakar&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894398cndhcd23&tn=mystar%20store&am=200&cu=INR&mode=00&sign=aagshd4542bdhhvdshsbvqfqttsvsvsbsjn&orgid=000000'
      url: 'upi://pay?pa=chandraedara1993@okicici&pn=edara%20chandrakar&tr=4894398cndhcd23&tn=mystar%20store&am=10&cu=INR&url=https://d10t11.firebaseapp.com/orderid=aagshd4542bdhhvdshsbvqfqttsvsvsbsjn'

    }

    this.webIntent.startActivityForResult(options).then(
      onSuccess => {
        console.log("Success", onSuccess);
        this.cartService.pay = 2;


      },
      onError => {
        console.log("error", onError);
      });
  }
  upi3() {
    const options = {
      action: this.webIntent.ACTION_VIEW,
      //url: 'upi://pay?pa=chandraedara1993@okicici&pn=EDARA CHANDRAKAR&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894398cndhcd23&am=10&cu=INR&tn=App Payment'
      url: 'upi://pay?pa=chandraedara1993@okicici&pn=edara%20chandrakar&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894398cndhcd23&tn=mystar%20store&am=300&cu=INR&mode=00&sign=aagshd4542bdhhvdshsbvqfqttsvsvsbsjn&orgid=00000'

    }

    this.webIntent.startActivityForResult(options).then(
      onSuccess => {
        console.log("Success", onSuccess);
        this.cartService.pay = 2;

      },
      onError => {
        console.log("error", onError);
      });
  }
  upi4() {
    const options = {
      action: this.webIntent.ACTION_VIEW,
      //url: 'upi://pay?pa=chandraedara1993@okicici&pn=EDARA CHANDRAKAR&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894398cndhcd23&am=10&cu=INR&tn=App Payment'
      url: 'upi://pay?pa=chandraedara1993@okicici&pn=edara%20chandrakar&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894398cndhcd23&tn=mystar%20store&am=400&cu=INR&mode=00&sign=aagshd4542bdhhvdshsbvqfqttsvsvsbsjn&orgid=00000'

    }

    this.webIntent.startActivityForResult(options).then(
      onSuccess => {
        console.log("Success", onSuccess);
        this.cartService.pay = 2;

      },
      onError => {
        console.log("error", onError);
      });
  }
  upi5() {
    const options = {
      action: this.webIntent.ACTION_VIEW,
      //url: 'upi://pay?pa=chandraedara1993@okicici&pn=EDARA CHANDRAKAR&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894398cndhcd23&am=10&cu=INR&tn=App Payment'
      url: 'upi://pay?pa=chandraedara1993@okicici&pn=edara%20chandrakar&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894398cndhcd23&tn=mystar%20store&am=500&cu=INR&mode=00&sign=aagshd4542bdhhvdshsbvqfqttsvsvsbsjn&orgid=00000'

    }

    this.webIntent.startActivityForResult(options).then(
      onSuccess => {
        console.log("Success", onSuccess);
        this.cartService.pay = 2;

      },
      onError => {
        console.log("error", onError);
      });
  }
}
