import {Component, OnInit} from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `<h1>{{title}}</h1>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" routerLink="/dashboard">Dashboard</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="/heroes">Heroes</a>
    </li>
  </ul>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  ngOnInit(): void {
    $('.nav .nav-link').on('click', function () {
      $('.nav').find('.active').removeClass('active');
      $(this).addClass('active');
    });
  }
}


