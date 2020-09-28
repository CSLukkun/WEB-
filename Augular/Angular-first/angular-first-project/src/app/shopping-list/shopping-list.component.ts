import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.moudle';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[] = [
    new Ingredients("apple",5),
    new Ingredients("pear",15),

  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient:Ingredients){
    this.ingredients.push(ingredient);
  }

}
