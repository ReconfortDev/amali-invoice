import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import {NgOptimizedImage} from "@angular/common";
import { LayoutComponent } from '../components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
