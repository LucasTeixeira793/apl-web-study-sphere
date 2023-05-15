import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLoggedInComponent } from './navbar-logged-in.component';

describe('NavbarLoggedInComponent', () => {
  let component: NavbarLoggedInComponent;
  let fixture: ComponentFixture<NavbarLoggedInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarLoggedInComponent]
    });
    fixture = TestBed.createComponent(NavbarLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
