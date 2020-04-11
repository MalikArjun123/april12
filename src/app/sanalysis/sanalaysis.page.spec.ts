import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sanalysis } from './sanalysis.page';

describe('Sanalysis', () => {
  let component: Sanalysis;
  let fixture: ComponentFixture<Sanalysis>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Sanalysis],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sanalysis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
