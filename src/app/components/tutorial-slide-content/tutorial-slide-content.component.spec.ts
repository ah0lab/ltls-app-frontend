import {fs} from 'fs-extra';
import {Router} from '@angular/router';
import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialSlideContentComponent } from './tutorial-slide-content.component';

describe('TutorialSlideContentComponent', () => {
  let component: TutorialSlideContentComponent;
  let fixture: ComponentFixture<TutorialSlideContentComponent>;
  // tslint:disable-next-line:prefer-const
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialSlideContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialSlideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should load', () => {
    expect(component).toBeTruthy();
  });

  it('should only play once', () => {
    expect(false).toBeTruthy();
  });

  it('should load image', () => {
    expect(fs.pathExists('../../../assets/img/hearing.png')).toBeTruthy();
  });

  it('should route to the main page', fakeAsync(() => {
    router.navigate([component.routePath]);
    tick();
    expect(location.pathname).toBe('/home');
  }));
});
