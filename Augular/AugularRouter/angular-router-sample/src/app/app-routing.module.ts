import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CrisisListComponent }   from './crisis-list/crisis-list.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//注册Router和Routes
const appRoutes: Routes = [
  {path:'crisis-center',component:CrisisListComponent},
  { path: '**', component: PageNotFoundComponent },//错误页
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  //默认页
]
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}