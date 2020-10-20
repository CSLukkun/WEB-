import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
@Component({
  selector: 'app-data-child-changes',
  templateUrl: './data-child-changes.component.html',
  styleUrls: ['./data-child-changes.component.css']
})
export class DataChildChangesComponent implements OnInit {
  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const log: string[] = [];
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const changedProp = changes[propName];
        const to = JSON.stringify(changedProp.currentValue);
        if (changedProp.isFirstChange()) {
          log.push(`Initial value of ${propName} set to ${to}`);
        } else {
          const from = JSON.stringify(changedProp.previousValue);
          log.push(`${propName} changed from ${from} to ${to}`);
        }
      }
    }
    this.changeLog.push(log.join(', '));
  }
}
