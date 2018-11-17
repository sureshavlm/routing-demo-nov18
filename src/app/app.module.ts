import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpModule  } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, AboutComponent, HomeComponent
  ],
  imports: [
    BrowserModule, routing,  HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
