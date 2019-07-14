import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './inteface/inteface.component';
// import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { GitServe } from './git-serv.service';


@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [GitServe],
  bootstrap: [AppComponent]
})
export class AppModule { }
