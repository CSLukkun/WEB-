import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.moudle';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 @Input() recipe:Recipe;
  //通过输入性绑定
  constructor() { }

  ngOnInit(): void {
  }

}
