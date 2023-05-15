import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private loginService: LoginService
  ){}

  login(){
    this.loginService.login()
    this.router.navigate(['/home'])
  }
}
