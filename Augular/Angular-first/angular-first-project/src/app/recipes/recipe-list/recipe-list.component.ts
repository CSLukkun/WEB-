import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.moudle';

class Recipes{
  public name:string;
  public description:string;
  public imagPath:string;

  constructor(name:string,desc:string,imagPath:string){
      this.name = name;
      this.description =desc;
      this.imagPath =imagPath;
  }
}
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipes[] =[
    new Recipes('测试食谱内容1','这是食谱内容的详细介绍','https://st-cn.meishij.net/r/15/03/4813265/s4813265_160095367969683.jpg'),
    new Recipes('测试食谱内容2','这是食谱内容的详细介绍','https://st-cn.meishij.net/r/15/03/4813265/s4813265_160095367969683.jpg'),
    new Recipes('测试食谱内容3','这是食谱内容的详细介绍','https://st-cn.meishij.net/r/15/03/4813265/s4813265_160095367969683.jpg'),
    new Recipes('测试食谱内容4','这是食谱内容的详细介绍','https://st-cn.meishij.net/r/15/03/4813265/s4813265_160095367969683.jpg'),

  ]
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe){
      this.recipeWasSelected.emit(recipe)
  }

}
