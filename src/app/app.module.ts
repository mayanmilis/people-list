import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavLinksComponent } from './components/layout/nav-links/nav-links.component';
import { GridComponent } from './components/grid/grid.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketItemComponent } from './components/tickets/ticket-item/ticket-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GridComponent,
    NavLinksComponent,
    TicketsComponent,
    TicketItemComponent,
    DashboardComponent
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
