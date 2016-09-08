import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';

import { HeroListComponent } from './toh/hero-list.component';
import { HeroData } from './hero-data';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(HeroData)
  ],
  declarations: [AppComponent, HeroListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
