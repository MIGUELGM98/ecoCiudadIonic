import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlashPage } from './slash.page';

describe('SlashPage', () => {
  let component: SlashPage;
  let fixture: ComponentFixture<SlashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
