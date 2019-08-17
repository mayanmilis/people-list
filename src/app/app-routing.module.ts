import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'people', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
