import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Janalysis } from './janalysis.page';

describe('Janalysis', () => {
  let component: Janalysis;
  let fixture: ComponentFixture<Janalysis>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Janalysis],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Janalysis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
