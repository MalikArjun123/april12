import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Aanalysis } from './aanalysis.page';

describe('Ranalaysis', () => {
  let component: Aanalysis;
  let fixture: ComponentFixture<Aanalysis>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Aanalysis],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Aanalysis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
