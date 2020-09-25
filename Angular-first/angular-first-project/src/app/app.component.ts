import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-first-project';
  loadedFeature = 'recipe'

  onNavigate(feature:string){
    console.log(123)
    this.loadedFeature = feature
  }
}
