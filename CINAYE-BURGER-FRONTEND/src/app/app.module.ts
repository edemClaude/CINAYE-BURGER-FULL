import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BurgerComponent} from "./burger/burger.component";
import {NgOptimizedImage} from "@angular/common";
import {NavComponent} from "./template/nav.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    NavComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgOptimizedImage,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
