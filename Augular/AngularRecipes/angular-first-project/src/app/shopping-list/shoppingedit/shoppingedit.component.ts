import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.moudle';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef
  @ViewChild('amountInput') amountInputRef:ElementRef
  //使用viewChild拿到模板里定义的对象.
  //变更检测器会在视图的 DOM 中查找能匹配上该选择器的第一个元素或指令。 
  //如果视图的 DOM 发生了变化，出现了匹配该选择器的新的子节点，该属性就会被更新。
  
  @Output() ingredientAdded = new EventEmitter<{name:string,amount:number}>()

  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredients(ingName,ingAmount);
    this.ingredientAdded.emit(newIngredient);
}

}
