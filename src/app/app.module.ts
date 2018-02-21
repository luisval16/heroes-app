import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroService } from "./hero.service";
import { MessageService } from './message.service';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { MessagesComponent } from "./messages/messages.component";
import { HeroSearchComponent }  from './hero-search/hero-search.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MDBBootstrapModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
 
  ],
  schemas:[NO_ERRORS_SCHEMA]
  ,
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
