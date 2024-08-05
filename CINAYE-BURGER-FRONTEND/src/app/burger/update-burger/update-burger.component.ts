import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BurgerService} from "../../services/burger.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-burger',
  templateUrl: './update-burger.component.html',
  styleUrl: './update-burger.component.css'
})
export class UpdateBurgerComponent implements OnInit {
  burger: any;
  id: number = 0;


  constructor(private httpClient: HttpClient, private burgerService: BurgerService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      console.log(params['id']);
      this.id = +params['id'];
      this.getBurger(params['id']);
    })
  }

  getBurger(id: number) {
    this.burgerService.getBurger(id).subscribe(
      (data) => {
        this.burger = data;
        console.log(this.burger);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
