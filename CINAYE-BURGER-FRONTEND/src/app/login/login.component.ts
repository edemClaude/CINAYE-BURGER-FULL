import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: any;
  verifyFrom: boolean = false;

  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.verifyFrom = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.service.login(this.loginForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.service.setLoggedInStatus(true);
        this.router.navigate(['/dashboard']).then();
      },
      error: (error) => {
        console.log(error);
        this.verifyFrom = false;
      }
    });
  }

}
