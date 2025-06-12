import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  standalone: false,
  templateUrl: './servers.html',
  styleUrl: './servers.css'
})
export class Servers implements OnInit {
  serverCreationStatus: string = 'No server was created!';
  serverName = '';
  allowServerName: boolean = false;

  constructor() {
  }
  ngOnInit() {
    
  }

  onCreateServer() {
    this.allowServerName = true
    this.serverCreationStatus = 'Server was created! Name of server is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
      this.serverName = (<HTMLInputElement>event.target).value;
  }
}
