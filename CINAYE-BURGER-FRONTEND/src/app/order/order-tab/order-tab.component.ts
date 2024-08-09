import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-order-tab',
  templateUrl: './order-tab.component.html',
  styleUrl: './order-tab.component.css'
})
export class OrderTabComponent implements OnInit{
  orders: any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(
      (data) => {
      this.orders = data;
    },
      (error) => {
        console.log(error);
      })
    ;
  }

  cancelOrder(id: number) {
    this.orderService.cancelOrder(id).subscribe(
      (data) => {
        this.getOrders();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  finishOrder(id: number) {
    this.orderService.completeOrder(id).subscribe(
      (data) => {
        this.getOrders();
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
