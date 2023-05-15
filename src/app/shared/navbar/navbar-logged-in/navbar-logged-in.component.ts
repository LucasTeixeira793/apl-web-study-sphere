import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-logged-in',
  templateUrl: './navbar-logged-in.component.html',
  styleUrls: ['./navbar-logged-in.component.css']
})
export class NavbarLoggedInComponent {

  constructor(
    private elementRef: ElementRef,
    private loginService: LoginService,
    private router: Router
  ){}

  logout(){
    this.loginService.logout();
    this.router.navigate(['/']);
  }

  // Dropdown
  isDropdownOpen: boolean = false;
  isDropdownAnimated: boolean = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isDropdownAnimated = true;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
    this.isDropdownAnimated = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Verifica se o clique ocorreu dentro do dropdown
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
      this.isDropdownAnimated = false;
    }
  }
}
