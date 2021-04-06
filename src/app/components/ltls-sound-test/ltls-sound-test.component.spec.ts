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

  describe('playSound()', () => {
    it('should play sound', () => {

    });
  });

  describe('canHear()', () => {
    it('should display a message', () => {

    });
  });

  describe('cannotHear()', () => {
    it('should display a tip with a message', () => {

    });
  });


  it('should display 3 buttons after sound plays', () => {
    expect(component).toBeTruthy();
  });
});
