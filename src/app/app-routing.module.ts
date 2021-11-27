import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryTableComponent } from './country-table/country-table.component';


const routes: Routes = [
  { path: '', component: CountryTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
