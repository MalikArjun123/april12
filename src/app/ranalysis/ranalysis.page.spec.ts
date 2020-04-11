import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ranalysis } from './ranalysis.page';

describe('Ranalaysis', () => {
  let component: Ranalysis;
  let fixture: ComponentFixture<Ranalysis>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Ranalysis],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ranalysis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
