import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BurgerComponent} from "./burger/burger.component";
import {NgOptimizedImage} from "@angular/common";
import {NavComponent} from "./template/nav.component";
import {HomeComponent} from "./home/home.component";
import { UpdateBurgerComponent } from './burger/update-burger/update-burger.component';
import { AddBurgerComponent } from './burger/add-burger/add-burger.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BurgerFormComponent } from './burger/burger-form/burger-form.component';
import { AdminComponent } from './template/admin/admin.component';
import { OrderComponent } from './order/order.component';
import { DetailBurgerComponent } from './burger/detail-burger/detail-burger.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { OrderTabComponent } from './order/order-tab/order-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    NavComponent,
    HomeComponent,
    UpdateBurgerComponent,
    AddBurgerComponent,
    BurgerFormComponent,
    AdminComponent,
    OrderComponent,
    DetailBurgerComponent,
    CustomerFormComponent,
    OrderTabComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
