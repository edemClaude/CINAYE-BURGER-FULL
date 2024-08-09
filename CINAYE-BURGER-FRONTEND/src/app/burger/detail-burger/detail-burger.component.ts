import {Component, OnInit} from '@angular/core';
import {BurgerService} from "../../services/burger.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-burger.component.html',
  styleUrl: './detail-burger.component.css'
})
export class DetailBurgerComponent implements OnInit{
  burger: any;

  constructor(private http: HttpClient, private burgerService: BurgerService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getBurger(this.route.snapshot.params['id']);
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
