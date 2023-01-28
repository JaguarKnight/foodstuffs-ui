import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FoodstuffsService } from './services/foodstuffs.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ButtonComponent } from './components/common/button/button.component';
import { PageComponent } from './components/common/page/page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconComponent } from './components/common/icon/icon.component';
import { DesktopMenuComponent } from './components/navbar/desktop-menu/desktop-menu.component';
import { MobileMenuComponent } from './components/navbar/mobile-menu/mobile-menu.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ButtonComponent,
    PageComponent,
    NavbarComponent,
    IconComponent,
    DesktopMenuComponent,
    MobileMenuComponent,
    ClickOutsideDirective
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
