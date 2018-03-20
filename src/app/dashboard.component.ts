import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {AppLogService} from './app-log.servoce';

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

  constructor(private heroService: HeroService, private log: AppLogService) {
  };

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => {
      // this.log.log(heroes);
      // this.log.error(heroes);
      // this.log.warn(heroes);
      this.heroes = heroes.slice(1, 5);
      // console.log(this.equipmentsStatistiArray);
    });
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
    detailModal.modal('hide');
  };

  alertWarning() {
    this.showAlert = !this.showAlert;
  }
}
