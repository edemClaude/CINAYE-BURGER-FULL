import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DashboardService} from "../services/dashboard.service";
import {OrderService} from "../services/order.service";
import {FormBuilder} from "@angular/forms";
import {CustomerService} from "../services/customer.service";
import {BurgerService} from "../services/burger.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  stats: any;
  orders: any;
  orderForm: any;
  customers: any;
  burgers: any;

  constructor(private http: HttpClient, private dashService: DashboardService, private orderService: OrderService,
              private fb: FormBuilder, private customerService: CustomerService, private burgerService: BurgerService) {

    this.orderForm = this.fb.group({
      date: [''],
      status: [''],
      customer: [''],
      burger: [''],
    });


  }
  ngOnInit(): void {
    this.getStatistics();
    this.getCustomers();
    this.getBurgers();
    this.getAllOrders();
  }

  getBurgers(){
    this.burgerService.getBurgers().subscribe((data) => {
        this.burgers = data;
        console.log(data)
    },
      (error) => {
        console.log(error);
      }
      );
  }
  getCustomers() {
    this.customerService.getCustomers().subscribe((data) => {
        this.customers = data;
        console.log(data)
    },
      (error) => {
        console.log(error);
      }
      );
  }
  getStatistics() {
    this.dashService.getStats().subscribe((data) => {
        this.stats = data;
        console.log(data)
    },
      (error) => {
        console.log(error);
      })
    ;
  }

  getAllOrders() {
    this.orderService.getOrders().subscribe((data: any) => {
        this.orders = data;
        console.log(data)
    },
      (error: any) => {
        console.log(error);
    })
  }

  onSubmit() {
    this.dashService.filter(this.orderForm.value).subscribe((data: any) => {
        this.orders = data;
        console.log(data)
    },
      (error: any) => {
        console.log(error);
      })
    ;
  }

}
