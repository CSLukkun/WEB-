import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-child',
  templateUrl: './local-child.component.html',
  styleUrls: ['./local-child.component.css']
})
export class LocalChildComponent implements OnInit {
  intervalId = 0;
  message = ''
  seconds =11;
  clearTimer() {
    clearInterval(this.intervalId);
  }
  constructor() { }

  ngOnInit(): void {
    this.start();
  }
  start() {
    this.countDown();
  }
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }

}
