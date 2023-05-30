import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoCalculationModule } from './demo-calculation/demo-calculation.module';
import { RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DemoCalculationComponent } from './demo-calculation/personal-information/demo-calculation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    DemoCalculationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
