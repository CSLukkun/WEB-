import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-parent',
  templateUrl: './event-parent.component.html',
  styleUrls: ['./event-parent.component.css']
})
export class EventParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  agreed = 0;
  disagreed = 0;
  voters = ['小吴', '小李', '小王'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
