import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReciclatePage } from './reciclate.page';

describe('ReciclatePage', () => {
  let component: ReciclatePage;
  let fixture: ComponentFixture<ReciclatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciclatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReciclatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
