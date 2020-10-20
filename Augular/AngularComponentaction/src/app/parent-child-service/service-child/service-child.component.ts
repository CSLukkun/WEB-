import { Component, OnInit,Input } from '@angular/core';
import {Subscription} from 'rxjs';
import {MissionService} from '../mission.service';
@Component({
  selector: 'app-service-child',
  templateUrl: './service-child.component.html',
  styleUrls: ['./service-child.component.css']
})
export class ServiceChildComponent implements OnInit {
  @Input() astronaut: string;

  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;
  constructor(private missionService: MissionService) {
    // 订阅消息,一旦missionAnnounced$变化就改变mission的值.
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      });
  }
  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
  }

}
