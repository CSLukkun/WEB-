import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroListComponent }    from './hero-list/hero-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
    //这个英雄模块单独管理一个路由.
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ]
})
export class HeroesModule {}
