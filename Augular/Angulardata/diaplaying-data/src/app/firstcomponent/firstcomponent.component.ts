import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstcomponent',
  template: `
    <p>
      firstcomponent works!
    </p>
  `,
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {
  title:string;
  myHero:string;
  constructor() { 
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';

  }

  ngOnInit(): void {
  }

}
