import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from '@angular/forms';
import { GaugeModule } from "angular-gauge";
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { HomeComponent } from './shared/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    BrowserModule,
    FormsModule,
    GaugeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
