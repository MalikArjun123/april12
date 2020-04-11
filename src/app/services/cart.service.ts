import { Injectable } from '@angular/core';
export interface Cart{
     productQty?: any,
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
    public productQty = 0;
    public pay = 0;
    constructor(){
        // this.productQty ;
    }
}