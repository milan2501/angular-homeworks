import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  standalone: false,
  templateUrl: './game-control.html',
  styleUrl: './game-control.css'
})
export class GameControl {

  interval;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;

  constructor() {}

  ngOnInit() {

  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 400)
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
