import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Analysis } from './analysis.page';

describe('Analysis', () => {
  let component: Analysis;
  let fixture: ComponentFixture<Analysis>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Analysis],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Analysis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
