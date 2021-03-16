import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable login after 5 incorrect login attempts', () => {
    component.user = {userName: 'name', password: 'pass'};

    // Attempt 5 incorrect logins
    for (let i = 0; i < 5; i++) {
      component.authenticateUser();
    }

    expect(component.loginDisabled).toBeTruthy();

    component.authAttemptCount = 0;
    component.loginDisabled = false;
  });

  describe( 'authenticateUser', () => {
    it('should ensure a username has been entered', () => {
      component.user = {userName: ' ', password: 'pass'};

      component.authenticateUser();

      // 1 error should be generated
      expect(component.authErrors.length).toBe(1);

      expect(component.authErrors[0].reason).toBe('Username');
    });

    it('should ensure a password has been entered', () => {
      component.user = {userName: 'user', password: ' '};

      component.authenticateUser();

      // 1 error should be generated
      expect(component.authErrors.length).toBe(1);

      expect(component.authErrors[0].reason).toBe('Password');
    });
  });
});
