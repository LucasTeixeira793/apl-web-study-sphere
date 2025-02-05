import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppRoutingModule } from './app.routing';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarLoggedInComponent } from './shared/navbar/navbar-logged-in/navbar-logged-in.component';
import { NavbarLoggedOutComponent } from './shared/navbar/navbar-logged-out/navbar-logged-out.component';
import { SidebarComponent } from './shared/navbar/sidebar/sidebar.component';
import { CardAnotacaoComponent } from './shared/card-anotacao/card-anotacao.component';
import { TagComponent } from './shared/tag/tag.component';
import { ProfileComponent } from './profile/profile.component';
import { UniversityComponent } from './university/university.component';
import { WritingBtnComponent } from './shared/writing-btn/writing-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarLoggedInComponent,
    NavbarLoggedOutComponent,
    SidebarComponent,
    CardAnotacaoComponent,
    TagComponent,
    ProfileComponent,
    UniversityComponent,
    WritingBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
