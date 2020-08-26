import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QCompletionPage } from './q-completion.page';

describe('QCompletionPage', () => {
  let component: QCompletionPage;
  let fixture: ComponentFixture<QCompletionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QCompletionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QCompletionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
