import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../services/order.service";
import {FormBuilder, Validators} from "@angular/forms";
import {PaymentService} from "../services/payment.service";

@Component({
  selector: 'app-payment-tab',
  templateUrl: './payment-tab.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentTabComponent implements OnInit{
  payments: any;

  constructor(private  paymentService: PaymentService) {}

  ngOnInit(): void {
    this.getPayments();
  }

  getPayments() {
    this.paymentService.getPayments().subscribe(
      (data) => {
        console.log(data);
        this.payments = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  paid(id: number) {
    this.paymentService.completePayment(id).subscribe(
      (data) => {
        console.log(data);
        this.getPayments();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  cancel(id: number) {
    this.paymentService.deletePayment(id).subscribe(
      (data) => {
        console.log(data);
        this.getPayments()
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
