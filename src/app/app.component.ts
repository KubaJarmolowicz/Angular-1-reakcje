import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  timerEnded = false;
  reactionStartTimeStamp = 0;
  timerEndTimeStamp = 0;
  reactionTime = this.getReactionTime();
  presentTimeout;

  ngOnInit() {
    this.startNewTry();
  }

  getFinalScore() {
    if (!this.timerEnded) {
      this.reactionTime = "POBITE GARY!!!!!1";
      clearTimeout(this.presentTimeout);
      return;
    }

    this.timerEndTimeStamp = this.getTimeStamp();
    this.reactionTime = this.getReactionTime();
  }

  getReactionTime() {
    return `${this.timerEndTimeStamp - this.reactionStartTimeStamp}ms`;
  }

  getTimeStamp() {
    return Date.now();
  }

  startNewTry() {
    this.timerEnded = false;
    this.reactionStartTimeStamp = 0;
    this.timerEndTimeStamp = 0;
    this.reactionTime = "0ms";
    clearTimeout(this.presentTimeout);
    this.setTimer(this.pickRandomTimeBetween(3000, 10000));
  }

  pickRandomTimeBetween(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randomizedInt = Math.floor(Math.random() * (max - min + 1) + min);

    return randomizedInt;
  }

  setTimer(timeLeft: number) {
    this.presentTimeout = setTimeout(() => {
      this.timerEnded = true;
      this.reactionStartTimeStamp = this.getTimeStamp();
    }, timeLeft);
  }
}
