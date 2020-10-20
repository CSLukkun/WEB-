import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-child',
  templateUrl: './event-child.component.html',
  styleUrls: ['./event-child.component.css']
})
export class EventChildComponent implements OnInit {
  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;
  constructor() { }

  ngOnInit(): void {
  }
  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }

}
