import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-data-child-setter',
  templateUrl: './data-child-setter.component.html',
  styleUrls: ['./data-child-setter.component.css']
})
export class DataChildSetterComponent implements OnInit {
  private _name = '';
  @Input()
  set name(name: string) {
    // 把父组件传递过来的数据装换成大写
    console.log(name);
    this._name = (name && name.toUpperCase()) || '<no name set>';
  }

  get name(): string { return this._name; }

  constructor() { }

  ngOnInit() {
  }

}
