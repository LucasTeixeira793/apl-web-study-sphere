import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLoggedOutComponent } from './navbar-logged-out.component';

describe('NavbarLoggedOutComponent', () => {
  let component: NavbarLoggedOutComponent;
  let fixture: ComponentFixture<NavbarLoggedOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarLoggedOutComponent]
    });
    fixture = TestBed.createComponent(NavbarLoggedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
