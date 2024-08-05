import { Component } from '@angular/core';
import {Burger} from "../../models/burger";

@Component({
  selector: 'app-add-burger',
  templateUrl: './add-burger.component.html',
  styleUrl: './add-burger.component.css'
})
export class AddBurgerComponent {
  burger: any = new Burger();

}
