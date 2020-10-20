import { Component, OnInit } from '@angular/core';
import {MissionService} from '../mission.service';
@Component({
  selector: 'app-service-parent',
  templateUrl: './service-parent.component.html',
  styleUrls: ['./service-parent.component.css'],
  providers: [MissionService]
})
export class ServiceParentComponent{

  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
    'Fly to mars!',
    'Fly to Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    // 订阅消息，当数据改变的时候，会调用到改函数
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

}
