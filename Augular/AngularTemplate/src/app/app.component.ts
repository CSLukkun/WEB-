import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Component = 1;
  getValue(): number {
    return 1 + 1;
  }
  click(): void {
    alert('click');
  }
  values: number[] = [1, 2, 3];
  name: string = '';
  style = {
    width: '100px',
    height: '100px',
    backgroundColor: 'red'
  }
  onOpen():void {
    alert('open')
  }
  onClose():void {
    alert('close')
  }
}

// <h1>我是直接求值{{1+1}}</h1>
// <h1>我是组件对象{{Component}}</h1>
// <h1>我是属性表达式{{getValue()}}</h1>
// <h1>我是模板对象{{Template.value}}</h1>
// <input type="text" #Template>
// <button (onclick)='click()'>我是事件绑定</button>
// <ul>我是组件引用对象
//   <li *ngFor='let value of values'>{{value}}</li>
// </ul>
