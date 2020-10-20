import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  status:boolean = true
  @Output() open:EventEmitter<any> = new EventEmitter()
  @Output() close:EventEmitter<any> = new EventEmitter()
  toggle(){
    this.status = !this.status;
    if(this.status == true){
      this.open.emit(null)
    }else{
    this.close.emit(null)
    }
  }

  
}
