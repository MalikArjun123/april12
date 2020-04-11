//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestsPage } from './contests.page';
import { IonicModule } from '@ionic/angular';

describe('ContestsPage', () => {
  let component: ContestsPage;
  let fixture: ComponentFixture<ContestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContestsPage],
      //schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
