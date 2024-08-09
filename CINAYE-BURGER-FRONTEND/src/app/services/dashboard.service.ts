import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getStats() {
    return this.http.get('http://localhost:8000/api/dashboard');
  }

  filter(value: any): any {
    return this.http.get<any>('http://localhost:8000/api/dashboard/filter', {params: value});
  }

}
