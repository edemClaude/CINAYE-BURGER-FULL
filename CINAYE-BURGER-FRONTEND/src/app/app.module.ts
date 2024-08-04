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
import { BurgerFromComponent } from './burger/burger-from/burger-from.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    NavComponent,
    HomeComponent,
    UpdateBurgerComponent,
    AddBurgerComponent,
    BurgerFromComponent,
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
