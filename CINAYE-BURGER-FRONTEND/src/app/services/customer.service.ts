import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer";
import {Order} from "../models/order";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  /**
   * Constructor
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Get all customers
   * @returns
   */
  getCustomers() : Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8000/api/customers');
  }

  /**
   * Add a new customer
   * @param customer
   */
  addCustomer(customer: any) : Observable<Customer> {
    return this.http.post<Customer>('http://localhost:8000/api/customers', customer);
  }

  /**
   * Get a specific customer by id
   * @param id
   */
  getCustomer(id: number) : Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8000/api/customers/${id}`);
  }

  /**
   * GET all orders for a specific client by it id
   * @param id
   */
  getCustomerOrders(id: number) : Observable<Order[]> {
    return this.http.get<Order[]>(`http://localhost:8000/api/customers/${id}/orders`);
  }
}
