import { Component } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`
  // <h1>{{title}}</h1>
  // <ul>
  //   <li *ngFor='let hero of heroes'>
  //     {{hero.id}}
  //   </li>
  // </ul>
  // <p *ngIf='heroes.length > 3'>
  // There are many heroes
  // </p>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diaplaying-data';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
  propertyTitle = "lukun";
  interpolationTitle = "lukun"
  evilTitle = 'Template <script>alert("evil never sleeps")</script> <h1>{{title}}</h1>Syntax';
  currentItem = {
    name:''
  }
  color = '';
}

