import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})

export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color =''
}
