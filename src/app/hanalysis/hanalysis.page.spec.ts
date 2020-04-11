import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Hanalysis } from './hanalysis.page';

describe('Hanalysis', () => {
  let component: Hanalysis;
  let fixture: ComponentFixture<Hanalysis>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Hanalysis],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Hanalysis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
