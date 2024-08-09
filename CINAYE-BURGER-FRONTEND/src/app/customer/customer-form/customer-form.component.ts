import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent implements OnInit {
  customerForm: any;
  verifyForm: boolean = false;
  @Output() addCustomer = new EventEmitter<any>();

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private router: Router,
              private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      name: ['', Validators.required],
      first_name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    this.verifyForm = true;
    if (this.customerForm.invalid) {
      return;
    }

    this.addCustomer.emit(this.customerForm.value);
/*
    this.customerService.addCustomer(formData).subscribe(
      response => {
        console.log(response);
        // this.router.navigate(['/customers']);
      },
      error => {
        console.log(error);
      }
    );

 */
  }


}
