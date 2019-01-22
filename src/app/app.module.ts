import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ReceptenComponent } from './recepten.component';
import { ReceptenService } from './recepten.service';

// define the routes
const appRoutes: Routes = [
  { path: '**', component: ReceptenComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpClientModule,
                FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ReceptenComponent],
  providers:    [ ReceptenService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
