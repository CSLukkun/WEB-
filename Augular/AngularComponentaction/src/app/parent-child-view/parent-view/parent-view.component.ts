import { Component, OnInit, ViewChild } from '@angular/core';
import {ChildViewComponent} from '../child-view/child-view.component'
@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.css']
})
export class ParentViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild(ChildViewComponent)
    private timerComponent:ChildViewComponent
  seconds(){
    return 0;
  }
  ngAfterViewInit() {
    // this.seconds = ()=>this.timerComponent.seconds
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    // 等待父组件更新完毕调用second函数.
  }
  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }
}
