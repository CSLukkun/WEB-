import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent }    from './hero-list/hero-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
  { path: 'heroes', redirectTo: '/superheroes' },
  { path: 'hero/:id', redirectTo: '/superhero/:id' },
  //:id在Url中创建了一个空位,为了让路由参数能够插入URL中.
  { path: 'superheroes',  component: HeroListComponent, data: { animation: 'heroes' } },
  //data对象添加了转场动画
  { path: 'superhero/:id', component: HeroDetailComponent, data: { animation: 'hero' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
    //只有在跟模模块AppRoutingModule中才可以使用forRoot,在其他模块中使用forChild
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
