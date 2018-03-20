import {Component, OnInit} from '@angular/core';
import {AlarmDetailService} from '../service/alarm-detail.service';

@Component({
  selector: 'app-alarm-detail',
  templateUrl: './alarm-detail.component.html',
  styleUrls: ['./alarm-detail.component.css']
})
export class AlarmDetailComponent implements OnInit {

  constructor(private  alarmService: AlarmDetailService) {
  }

  ngOnInit() {
  }

  uploadMessage() {
    this.alarmService.broadcastMessage('message');
  }

}
