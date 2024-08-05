import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  /**
   * Returns all orders
   * @returns Observable<Order[]>
   */
  getOrders() : Observable<Order[]>{
    return this.http.get<Order[]>('http://localhost:8000/api/orders');
  }

  /**
   * Adds an order
   * @param order
   * @returns Observable<Order>
   */
  addOrder(order: any) : Observable<Order>{
    return this.http.post<Order>('http://localhost:8000/api/orders', order);
  }

  /**
   * Returns an order
   * @param id
   * @returns Observable<Order>
   */
  getOrder(id: any) : Observable<Order>{
    return this.http.get<Order>('http://localhost:8000/api/orders/'+id);
  }

  /**
   * Cancels an order
   * @param id
   */
  cancelOrder(id: any) : Observable<Order>{
    return this.http.put<Order>('http://localhost:8000/api/orders/'+id+'/cancel', null);
  }

  /**
   * Completes an order
   * @param id
   */
  completeOrder(id: any) : Observable<Order>{
    return this.http.put<Order>('http://localhost:8000/api/orders/'+id+'/complete', null);
  }
}

/*
  GET|HEAD        api/orders ................................................ orders.index › Api\OrderController@index
  POST            api/orders ................................................ orders.store › Api\OrderController@store
  GET|HEAD        api/orders/{order} .......................................... orders.show › Api\OrderController@show
  PUT             api/orders/{order}/cancel ............................................... Api\OrderController@cancel
  PUT             api/orders/{order}/complete ........................................... Api\OrderController@setReady
*/
