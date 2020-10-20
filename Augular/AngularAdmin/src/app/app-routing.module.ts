import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { Page404Component } from './page404/page404.component';
import { DashboradComponent } from './admin/dashborad/dashborad.component';
import { ButtonComponent } from './admin/dashborad/button/button.component';
import { EchartsComponent } from './admin/dashborad/echarts/echarts.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      {
        path:'user',
        component:UserComponent
      },
      {
        path:'dashboard',
        component:DashboradComponent,
        children:[
          {
            path:'',
            redirectTo: 'button',
            pathMatch: 'full'
          },
          {
            path: 'button',
            component: ButtonComponent
        },
        {
            path: 'echarts',
            component: EchartsComponent
        },
        {
            path: '**',
            component: Page404Component
        }
        ]
      },

    ]
  },
  {
    path:'**',
    component:Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
