import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { Page404Component } from './page404/page404.component';
import { DashboradComponent } from './admin/dashborad/dashborad.component';
import { ButtonComponent } from './admin/dashborad/button/button.component';
import { EchartsComponent } from './admin/dashborad/echarts/echarts.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    Page404Component,
    DashboradComponent,
    ButtonComponent,
    EchartsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
