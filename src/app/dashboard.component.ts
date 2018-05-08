import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {AppLogService} from './app-log.servoce';
import {AlarmDetailService} from './extend/service/alarm-detail.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ProductControllerService} from './api/productController.service';

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

  alarmArray = [1, 2, 4, 6, 7, 8];

  constructor(private heroService: HeroService, private log: AppLogService, private alaramDetailService: AlarmDetailService, private httpClient: HttpClient, private  productControllerService: ProductControllerService) {
  };

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      // this.log.log(heroes);
      // this.log.error(heroes);
      // this.log.warn(heroes);
      this.heroes = heroes.slice(1, 5);
      // console.log(this.equipmentsStatistiArray);
    });
    this.alaramDetailService.output$.subscribe(v => {
      this.log.log(v, new Date());
    });
  };

  consoleLog(): void {
    this.productControllerService.deleteUsingDELETE(1, 'response', false).subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
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
    detailModal.modal('hide');
  };

  alertWarning() {
    const params = new HttpParams().set('page', '1').set('limit', '8');
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    this.httpClient.get('//127.0.0.1:8080/uaa/index/userInfo', {headers: headers, observe: 'events', params: params})
      .toPromise().then(response => console.log(response))
      .catch(this.handleError);
    this.showAlert = !this.showAlert;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  };

  addItem() {
    const max = Math.max.apply(Math, this.alarmArray);
    this.alarmArray.push(max + 1);
  }

  itemClick(item) {
    console.log(item);
  }
}
