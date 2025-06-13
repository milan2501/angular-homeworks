import { Component } from "@angular/core";


@Component({
    selector: "app-server",
    standalone: false,
    templateUrl: "./server.component.html",
    styleUrl: "./server.component.css"
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "offline";
    showTuna: boolean = false;
    log = [];

    constructor () {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor() {
        return this.serverStatus === 'offline' ? 'red' : 'green';
    }

    onToggleDetails() {
        this.showTuna = !this.showTuna;
        this.log.push(new Date());
    }
}





































































































