import { HttpHeadersInterceptor } from './core/interceptors/http-headers.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from '@angular/forms';
import { GaugeModule } from "angular-gauge";
import { NgModule } from '@angular/core';


import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { HttpErrorsInterceptor } from './core/interceptors/http-errors.interceptor';
import { HomeComponent } from './shared/components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    AppRoutingModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    BrowserModule,
    FormsModule,
    GaugeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeadersInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorsInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
