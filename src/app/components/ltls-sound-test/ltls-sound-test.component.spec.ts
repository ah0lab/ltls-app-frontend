import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LtlsSoundTestComponent } from './ltls-sound-test.component';

describe('LtlsSoundTestComponent', () => {
  let component: LtlsSoundTestComponent;
  let fixture: ComponentFixture<LtlsSoundTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LtlsSoundTestComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LtlsSoundTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
