import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CluPage } from './clu.page';

describe('CluPage', () => {
  let component: CluPage;
  let fixture: ComponentFixture<CluPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CluPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CluPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
