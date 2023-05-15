import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private pagesWithoutNavbar: string[] = ['/login', '/register'];
  
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  isUserLoggedIn(): boolean {
    return this.loginService.isLoggedIn()
  }

  shouldShowNavbar(): boolean {
    return !this.pagesWithoutNavbar.includes(this.router.url);
  }

  
}
