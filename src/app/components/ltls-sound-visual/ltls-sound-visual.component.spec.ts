import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LtlsSoundVisualComponent } from './ltls-sound-visual.component';

describe('LtslSoundVisualComponent', () => {
  let component: LtlsSoundVisualComponent;
  let fixture: ComponentFixture<LtlsSoundVisualComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LtlsSoundVisualComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LtlsSoundVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
