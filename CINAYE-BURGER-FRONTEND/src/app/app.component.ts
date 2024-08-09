import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'CINAYE-BURGER';
  title = 'CINAYE-BURGER';

  isLogged: boolean = false;
  constructor(private authService: AuthService) {
  }
  isLoggedIn(): boolean {
    this.authService.isLoggedIn().subscribe(status => {
      this.isLogged = status;
    });
    return this.isLogged;
  }
}
