import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../services/customer.service";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  showForm: boolean = false;
  showSearchForm: boolean = true;
  orderForm: any;
  searchForm: any;
  findCustomer: boolean = false;
  customer: any;
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private router: ActivatedRoute,
              private customerService: CustomerService, private orderService: OrderService, private navRoute: Router) {}

  showClientForm() {
    if (this.showSearchForm) {
      this.showSearchForm = false;
    }
    this.showForm = !this.showForm;
  }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      customer_id: ['', Validators.required],
      burger_id: [this.router.snapshot.params['id'] , Validators.required],
      quantity: ['1', Validators.required]
    });

    this.searchForm = this.formBuilder.group({
      search: ['']
    });
  }

  onSubmit(customer: any) {
    if (this.showForm) {
      this.showForm = false;
      console.log(customer);
      this.customerService.addCustomer(customer).subscribe(
        (data) => {
          console.log(data);
          this.customer = data;
          this.findCustomer = true;
          this.orderForm.patchValue({
            customer_id: data.id
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  submitOrder() {
    this.orderService.addOrder(this.orderForm.value).subscribe(
      (data) => {
        console.log(data);
        this.navRoute.navigate(['/payment/' + data.id]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showSearchClientForm() {
    if (this.showForm) {
      this.showForm = false;
    }
    this.showSearchForm = !this.showSearchForm;
  }

  searchClient() {
    this.customerService.findCustomer(this.searchForm.value.search).subscribe(
      (data) => {
        console.log(data);
        this.customer = data;
        this.findCustomer = true;
        this.orderForm.patchValue({
          customer_id: data.id
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
