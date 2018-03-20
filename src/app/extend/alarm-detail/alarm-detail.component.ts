import {Component, OnInit} from '@angular/core';
import {AlarmDetailService} from '../service/alarm-detail.service';

declare var jquery: any;
declare var $: any;

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
    const buttons = $('input[type=button]');
    console.log(buttons);
    buttons.attr('disabled') ? buttons.attr('disabled', false) : buttons.attr('disabled', true);
    this.alarmService.broadcastMessage('message');
  }

}
