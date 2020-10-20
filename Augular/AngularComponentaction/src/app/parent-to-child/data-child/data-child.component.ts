import { Component, OnInit,Input } from '@angular/core';
import {Hero} from '../../../app/hero';
@Component({
  selector: 'app-data-child',
  templateUrl: './data-child.component.html',
  styleUrls: ['./data-child.component.css']
})
export class DataChildComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.hero.name = 'tuacy';
  }

}
