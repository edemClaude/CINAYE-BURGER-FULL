import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BurgerComponent} from "./burger/burger.component";
import {HomeComponent} from "./home/home.component";
import {AddBurgerComponent} from "./burger/add-burger/add-burger.component";
import {UpdateBurgerComponent} from "./burger/update-burger/update-burger.component";
import {DetailBurgerComponent} from "./burger/detail-burger/detail-burger.component";
import {OrderComponent} from "./order/order.component";
import {OrderTabComponent} from "./order/order-tab/order-tab.component";

const routes: Routes = [
  { path: 'burger', component: BurgerComponent },
  { path: 'burger/add', component: AddBurgerComponent },
  { path: 'burger/:id', component: DetailBurgerComponent},
  { path: 'burger/edit/:id', component: UpdateBurgerComponent},
  { path: 'order/:id', component: OrderComponent },
  { path: 'order', component: OrderTabComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
