import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LtlsSoundTestCatComponent } from './ltls-sound-test-cat.component';

describe('LtlsSoundTestCatComponent', () => {
  let component: LtlsSoundTestCatComponent;
  let fixture: ComponentFixture<LtlsSoundTestCatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LtlsSoundTestCatComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LtlsSoundTestCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
