import { Component, OnInit } from '@angular/core';
import {Hero} from '../../../app/hero';
@Component({
  selector: 'app-data-parent',
  templateUrl: './data-parent.component.html',
  styleUrls: ['./data-parent.component.css']
})
export class DataParentComponent implements OnInit {

  parentHero: Hero = new Hero();
  nameParent = 'parent name';
  major = 1;
  minor = 23;

  constructor() {
    this.parentHero.name = '我是父组件定义的';
  }

  ngOnInit() {
  }

  onValueChangeClick() {
    this.parentHero.name = '我改变了';
  }

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }

}
