import {Component, OnInit} from "@angular/core";
import {Burger} from "../models/burger/burger";
import {HttpClient} from "@angular/common/http";
import {BurgerService} from "../services/burger/burger.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-burger",
  templateUrl: "./burger.component.html",
  styleUrls: ["./burger.component.css"]
})
export class BurgerComponent implements OnInit {

  listBurger: Burger[] = [];
  constructor(private  http: HttpClient, private burgerService: BurgerService, private router: Router) { }

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

  archived(id: number | undefined, is_archived: boolean) {
    if (!is_archived) {
      this.burgerService.archiverBurger(id).subscribe(
        (data)=> {
          console.log(data)
          this.getBurgers();
          // this.router.navigate(['/burger']).then(() => { window.location.reload() ;});
        },
        (error)=> {
          console.log(error)
        }
      );
    } else {
      this.burgerService.restoreBurger(id).subscribe(
        (data)=> {
          console.log(data);
          this.getBurgers();
          //this.router.navigate(['/burger']).then(() => { window.location.reload() ;});
        },
        (error)=> {
          console.log(error)
        }
      );
    }
  }
}
