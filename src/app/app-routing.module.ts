import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SingleinvoiceComponent} from "./pages/singleinvoice/singleinvoice.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details', component: SingleinvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
