import { Injectable } from '@angular/core';
export interface Cart{
     productQty?: any,
}
@Injectable({
  providedIn: 'root'
})
export class HCartService {
    public productQty = 0;
    constructor(){
        // this.productQty ;
    }
}