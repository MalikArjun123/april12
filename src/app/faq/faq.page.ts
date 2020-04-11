import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  public startupMenu: Array<any>;
  public sidemenu = 1;
  public showChildren = '';
  constructor() {
    this.startupMenu = environment.STARTUP_SIDEMENU;
   }

  ngOnInit() {
  }
  expandMenu(title) {
    console.log('title', title);
    if (this.showChildren === title) {
      this.showChildren = '';
    } else {
      this.showChildren = title;
    }
    console.log(this.showChildren);
  }
  showSidemenu(index: number) {
    this.sidemenu = index + 1;
  } 
}
