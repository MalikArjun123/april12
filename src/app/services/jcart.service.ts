import { Injectable } from '@angular/core';
export interface Cart{
     productQty?: any,
}
@Injectable({
  providedIn: 'root'
})
export class JCartService {
  public pay = 0;

    public productQty = 0;
    constructor(){
        // this.productQty ;
    }
}