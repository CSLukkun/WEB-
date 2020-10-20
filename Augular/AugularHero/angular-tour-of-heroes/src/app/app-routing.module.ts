import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // 声明导入的组件
  exports: [RouterModule]
  //声明导出的模块
})
export class AppRoutingModule{ }