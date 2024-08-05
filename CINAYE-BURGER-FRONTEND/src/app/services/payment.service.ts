import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Payment} from "../models/payment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  /**
   * Get all payments
   */
  getPayments() : Observable<Payment[]>{
    return this.http.get<Payment[]>('http://localhost:8000/api/payments');
  }

  /**
   * Get a single payment
   * @param id
   */
  getPayment(id: number) : Observable<Payment>{
    return this.http.get<Payment>('http://localhost:8000/api/payments/' + id);
  }

  /**
   * Add a new payment
   * @param payment
   */
  addPayment(payment: any) : Observable<Payment>{
    return this.http.post<Payment>('http://localhost:8000/api/payments', payment);
  }

  /**
   * Delete a payment by id
   * @param id
   */
  deletePayment(id: number) : Observable<Payment>{
    return this.http.delete<Payment>('http://localhost:8000/api/payments/' + id);
  }

  /**
   * Process payment
   * @param id
   */
  completePayment(id: number) : Observable<Payment>{
    return this.http.put<Payment>('http://localhost:8000/api/payments/' + id + '/complete', {});
  }
}

/*
  GET|HEAD        api/payments .......................................... payments.index › Api\PaymentController@index
  POST            api/payments .......................................... payments.store › Api\PaymentController@store
  GET|HEAD        api/payments/{payment} .................................. payments.show › Api\PaymentController@show
  DELETE          api/payments/{payment} ............................ payments.destroy › Api\PaymentController@destroy
  PUT             api/payments/{payment}/complete ...................................... Api\PaymentController@setPaid
*/
