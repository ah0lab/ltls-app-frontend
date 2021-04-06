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
    it('should play audio sound', () => {
      spyOn(component.audio, 'play');

      component.playSound();

      expect(component.audio.play).toHaveBeenCalled();
    });
  });

  describe('canHear()', () => {
    it('should display a message', () => {
      // Figure out a better way to test this
      spyOn(component.alertController, 'create');

      component.canHear();

      // TODO Figure out a better way to test for this
      expect(component.alertController.create).toHaveBeenCalled();
    });
  });

  describe('cannotHear()', () => {
    it('should display a tip with a message', () => {
      spyOn(component.alertController, 'create');

      component.cannotHear();

      expect(component.alertController.create).toHaveBeenCalled();
    });
  });


  it('should display 3 buttons after sound plays', () => {
    component.playSound();
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('ion-button');

    expect(buttons.length).toEqual(3);
  });
});
