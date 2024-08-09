import { Component } from '@angular/core';
import {sign} from "chart.js/helpers";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent{

  protected readonly sign = sign;
  constructor(private authService: AuthService, private router: Router) {}
  signOut() {
    localStorage.clear();
    this.router.navigate(['/']).then(() => window.location.reload());
    this.authService.logout();
  }
}
