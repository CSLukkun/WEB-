import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl: './server.component.html',
    styles:[
        `
        .oneline {
            background-color:red
        }
        `
    ]
})
export class ServerComponent{
    serverId:number =10;
    serverString:string="离线";
    serverStatus = '离线'
    getStatus(){
        return this.serverId;
    }
    constructor(){
        this.serverStatus = Math.random()>0.5?'离线':'在线';
    }
    getServeStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus ==='离线' ? 'red':'green'
    }
}