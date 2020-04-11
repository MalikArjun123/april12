import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-return',
  templateUrl: 'return.page.html',
  styleUrls: ['return.page.scss']
})
export class ReturnPage {
// public carti=2;
public rakesh=true;
public jacob=true;
public arjun=true;
public rohit=true;
public harry=true;
public smarty=true;
  constructor(public router: Router,public cartService: CartService) {}
  analysis(){
    this.router.navigate(['analysis'])
  }

}
