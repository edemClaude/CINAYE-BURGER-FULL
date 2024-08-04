import {Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import {BurgerService} from "../../services/burger/burger.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Burger} from "../../models/burger/burger";
@Component({
  selector: 'app-burger-from',
  templateUrl: './burger-from.component.html',
  styleUrl: './burger-from.component.css'
})

export class BurgerFromComponent implements OnInit {

  burgerForm;
  verifForm = false;

  constructor(
    private httpClient: HttpClient,
    private burgerService: BurgerService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.burgerForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      is_archived: [false],
      id: [0]
    })
  }

  ngOnInit(): void {}


  addBurger() {
    this.verifForm = true;

    if(this.burgerForm.invalid) {
      return;
    } else {
      console.log(this.burgerForm.value);

      /*
      const burgerData : Burger = {
        id: this.burgerForm.value.id ?? 0,
        name: this.burgerForm.value.name ?? '',
        description: this.burgerForm.value.description ?? '',
        price: this.burgerForm.value.price ?? 0,
        image: this.burgerForm.value.image ?? '',
        is_archived: this.burgerForm.value.is_archived ?? false,
      }
*/
      this.burgerService.addBurger(this.burgerForm.value).subscribe(
        (data)=> {
          console.log(data);
          this.router.navigate(['/burger']);
        },
        (error)=> {console.log(error)},
      );
    }

  }

}
