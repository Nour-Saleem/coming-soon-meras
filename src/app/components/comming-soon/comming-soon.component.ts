import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.scss']
})
export class CommingSoonComponent implements OnInit, OnDestroy {
targetDate = new Date(Date.now() + 11 * 24 * 60 * 60 * 1000);
  intervalId: any;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit() {
    this.updateTimer();
    this.intervalId = setInterval(() => this.updateTimer(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateTimer() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance < 0) {
      clearInterval(this.intervalId);
      this.days = this.hours = this.minutes = this.seconds = 0;
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}
