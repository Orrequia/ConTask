import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponentFixture } from 'angular-testing-library';
import { LoginFormComponent } from './login-form.component';

describe('Login Form Component', () => {
    const fixture = createComponentFixture({
        component: LoginFormComponent
    });

    beforeEach(async() => {
        await fixture.compile();
    });

    it('should compile', () => {
        expect(fixture).toMatchSnapshot();
    });
});

/*LO MIOimport { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login-form.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/