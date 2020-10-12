import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor() { }

  ngOnInit(): void {
  }
  addhero(newHero:string){
    if(newHero){}
      this.heroes.push(newHero)
  }
}
