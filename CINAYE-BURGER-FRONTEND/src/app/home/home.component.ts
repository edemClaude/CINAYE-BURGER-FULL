import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BurgerService} from "../services/burger/burger.service";
import {Burger} from "../models/burger/burger";

@Component(
  {
    selector: 'app-home',
    templateUrl: './home.component.html',
  }
)

export class HomeComponent
{
 listBurger: Burger[] = []
  constructor(private http: HttpClient, private burgerService: BurgerService) { }

  ngOnInit(): void
  {
    this.getBurgers();
  }

  getBurgers()
  {
    this.burgerService.getUnarchivedBurgers().subscribe(
      (data) => {
        this.listBurger = data;
        console.log(this.listBurger);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
