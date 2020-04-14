import { Injectable } from '@angular/core';
export interface Cart{
     productQty?: any,
}
@Injectable({
  providedIn: 'root'
})
export class SCartService {
    public productQty = 0;
    inc=0;
    abc=100;
    constructor(){
        // this.productQty ;
    }
    myFunctionpro() {
  
      if(this.inc<100){
      this.inc=this.inc+1;
      this.abc=100-this.inc;

      }
      else{
        this.inc=0;
      }
     //  alert(this.inc);    
   }
   myFunctionpro2() {

    if(this.inc<100){
    this.inc=this.inc+2;
    this.abc=100-this.inc;

    }
    else{
      this.inc=0;
    }
   //  alert(this.inc);    
 }
 myFunctionpro3() {

  if(this.inc<100){
  this.inc=this.inc+3;
  this.abc=100-this.inc;

  }
  else{
    this.inc=0;
  }
 //  alert(this.inc);    
}
myFunctionpro4() {

  if(this.inc<100){
  this.inc=this.inc+4;
  this.abc=100-this.inc;

  }
  else{
    this.inc=0;
  }
 //  alert(this.inc);    
}
myFunctionpro5() {

  if(this.inc<100){
  this.inc=this.inc+5;
  this.abc=100-this.inc;

  }
  else{
    this.inc=0;
  }
 //  alert(this.inc);    
}
}