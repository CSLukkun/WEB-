import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent }    from './hero-list/hero-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
const routes: Routes = [
  { path: 'heroes',  component: HeroListComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
  //
];

@NgModule({
  imports: [RouterModule.forChild(routes)],//顶层模块用forroot,其他模块皆用forchild
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
