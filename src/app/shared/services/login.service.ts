import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isUserLoggedIn: boolean = false;

  login() {
    // Lógica para fazer o login do usuário
    this.isUserLoggedIn = true;
  }

  logout() {
    // Lógica para fazer o logout do usuário
    this.isUserLoggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }
  
}
