import {Component, OnInit} from "@angular/core";
import {Burger} from "../models/burger/burger";
import {HttpClient} from "@angular/common/http";
import {BurgerService} from "../services/burger/burger.service";

@Component({
  selector: "app-burger",
  templateUrl: "./burger.component.html",
  styleUrls: ["./burger.component.css"]
})
export class BurgerComponent implements OnInit {

  listBurger: Burger[] = [];
  constructor(private  http: HttpClient, private burgerService: BurgerService) { }

  ngOnInit(): void {
    this.getBurgers();
  }

  getBurgers() {
    this.burgerService.getBurgers().subscribe(
      (data) => {
      this.listBurger = data;
      console.log(this.listBurger);
    },
    (error) => {
      console.log(error);
    });
  }

}
