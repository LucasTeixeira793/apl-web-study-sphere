import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  constructor(
    private router: Router,
    private loginService: LoginService
  ){}
  
  ngOnInit(): void {
      if(this.loginService.isLoggedIn()){
        this.router.navigate(['/home']);
      }
  }
}
