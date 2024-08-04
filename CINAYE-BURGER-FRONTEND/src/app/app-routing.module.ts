import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BurgerComponent} from "./burger/burger.component";
import {HomeComponent} from "./home/home.component";
import {AddBurgerComponent} from "./burger/add-burger/add-burger.component";

const routes: Routes = [
  { path: 'burger', component: BurgerComponent },
  { path: 'burger/add', component: AddBurgerComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }