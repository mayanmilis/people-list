import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavLinksComponent } from './components/Layout/nav-links/nav-links.component';
import { GridComponent } from './components/grid/grid.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketItemComponent } from './components/tickets/ticket-item/ticket-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavLinksComponent,
    GridComponent,
    TicketsComponent,
    TicketItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
