import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import {NgOptimizedImage} from "@angular/common";
import { LayoutComponent } from '../components/layout/layout.component';
import { LeftModalComponent } from '../components/modals/left-modal/left-modal.component';
import { NewInvoiceFormComponent } from './form/new-invoice-form/new-invoice-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ItemListComponent} from "./form/item-list/item-list.component";
import {InvoiceListComponent} from "../components/invoice-list/invoice-list.component";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {SingleinvoiceComponent} from "./pages/singleinvoice/singleinvoice.component";
import {HomeComponent} from "./pages/home/home.component";
import { EffectsModule } from '@ngrx/effects';
import {invoiceReducer} from "./store/invoices/invoices.reducer";
import {InvoiceEffects} from "./store/invoices/invoices.effects";
import {provideHttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LayoutComponent,
    LeftModalComponent,
    NewInvoiceFormComponent,
    ItemListComponent,
    InvoiceListComponent,
    SingleinvoiceComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    StoreModule.forRoot({invoices: invoiceReducer}, {}),
    EffectsModule.forRoot([InvoiceEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([])
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
