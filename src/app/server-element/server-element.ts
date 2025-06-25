import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  standalone: false,
  templateUrl: './server-element.html',
  styleUrl: './server-element.css'
})
export class ServerElement implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor () {}
  ngOnInit() {}

}
