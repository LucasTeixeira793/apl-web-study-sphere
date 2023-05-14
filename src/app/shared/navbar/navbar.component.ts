import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private pagesWithoutNavbar: string[] = ['/login', '/register'];
  
  constructor(private router: Router) {}

  shouldShowNavbar(): boolean {
    return !this.pagesWithoutNavbar.includes(this.router.url);
  }
}
