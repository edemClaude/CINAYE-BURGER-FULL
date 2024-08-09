import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInStatus = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(params: any) {
    return this.http.post<any>('http://localhost:8000/api/login', params);
  }

  logout() {
    this.isLoggedInStatus.next(false);
  }

  setLoggedInStatus(status: boolean) {
    this.isLoggedInStatus.next(true);
  }

  isLoggedIn() {
    return this.isLoggedInStatus.asObservable();
  }
}
