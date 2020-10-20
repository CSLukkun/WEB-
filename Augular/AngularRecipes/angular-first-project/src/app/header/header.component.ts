import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureChange = new EventEmitter<string>();
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }
  onSelect(feature:string){
    this.featureChange.emit(feature);
    //发出了一个feature事件
  }

}
