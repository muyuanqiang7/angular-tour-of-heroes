import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {AppLogService} from './app-log.servoce';
import {AlarmDetailService} from './extend/service/alarm-detail.service';
import {element} from 'protractor';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  showAlert = false;
  equipmentsStatistiArray = [
    {
      neName: 'lily',
      boards: [
        {
          num: 2,
          type: 'IDE1'
        },
        {
          num: 4,
          type: 'ICDE2'
        },
        {
          num: 4,
          type: 'ICDE3'
        },
        {
          num: 4,
          type: 'ICDE4'
        }
      ]
    }
  ];

  constructor(private heroService: HeroService, private log: AppLogService, private alaramDetailService: AlarmDetailService) {
  };

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => {
      // this.log.log(heroes);
      // this.log.error(heroes);
      // this.log.warn(heroes);
      this.heroes = heroes.slice(1, 5);
      // console.log(this.equipmentsStatistiArray);
    });
    this.alaramDetailService.output$.subscribe(v => {
      this.log.log(v, new Date());
    })
  };

  consoleLog(): void {
    console.log(this.equipmentsStatistiArray);
  };

  showModal() {
    const detailModal = $('.modal');
    console.log(detailModal);
    detailModal.modal('show');
  };

  closeModal() {
    const detailModal = $('.modal');
    const detailForm = $('#detailForm');
    console.log(detailForm);
    console.log(detailForm.serializeArray());
    console.log(JSON.stringify(detailForm.serializeArray()));
    const result = {};
    detailForm.serializeArray().forEach(element => {
      result[element.name] = element.value;
    });
    console.log(result);
    detailModal.modal('hide');
  };

  alertWarning() {
    this.showAlert = !this.showAlert;
  }
}
