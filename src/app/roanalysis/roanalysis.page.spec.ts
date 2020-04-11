import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Roanalysis } from './roanalysis.page';

describe('Roanalysis', () => {
  let component: Roanalysis;
  let fixture: ComponentFixture<Roanalysis>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Roanalysis],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Roanalysis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
