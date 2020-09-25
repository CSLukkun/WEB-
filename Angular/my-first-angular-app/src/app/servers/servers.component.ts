import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
   templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  // template:`<app-server></app-server><app-server></app-server>`
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  imgUrl =''
  serverCreationStatus = '服务没有创建'
  serveName ='testServe'
  serveCreated = false
  servers = ['ServerTest1','ServerTest2','ServerTest3']

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
      console.log('keyong')
    },2000)
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serveCreated = true
    this.servers.push(this.serveName);
    this.serverCreationStatus = '服务已经被创建了' + this.serveName;
  }
  onUpdataServeName(event:any){
    //console.log(event);
    this.serveName  = event.target.value;
  }

}
