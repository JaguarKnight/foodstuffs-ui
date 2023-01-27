import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FoodstuffsService } from './services/foodstuffs.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { ButtonComponent } from './components/common/button/button.component';
import { PageComponent } from './components/common/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ButtonComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FoodstuffsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
