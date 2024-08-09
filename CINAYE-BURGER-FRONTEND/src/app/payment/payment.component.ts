import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../services/order.service";
import {FormBuilder, Validators} from "@angular/forms";
import {PaymentService} from "../services/payment.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{
  paymentForm: any;// Déclarez FormGroup ici
  order: any;

  constructor(private router: ActivatedRoute, private orderService: OrderService, private navRoute: Router,
              private formBuilder: FormBuilder, private paymentService: PaymentService) {
    // Initialisez FormGroup dans le constructeur
    this.paymentForm = this.formBuilder.group({
      order_id: ['', Validators.required],
      amount: [0, Validators.required],
      is_paid: [true, Validators.required],
      paid_at: [new Date(), Validators.required]
    });
  }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    this.orderService.getOrder(this.router.snapshot.params['id']).subscribe(
      (data) => {
        console.log(data);
        this.order = data;

        // Met à jour les valeurs du formulaire une fois que la commande est récupérée
        this.paymentForm.patchValue({
          order_id: this.router.snapshot.params['id'],
          amount: this.order.quantity * this.order.burger?.price
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.paymentService.addPayment(this.paymentForm.value).subscribe(
      (data) => {
        console.log(data);
        this.navRoute.navigate(['/']).then(() => {
          console.log('Merci pour votre commande');
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
