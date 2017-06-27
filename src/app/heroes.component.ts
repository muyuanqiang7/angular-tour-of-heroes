import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router';
import {AppLogService} from "./app-log.servoce";


@Component({
  selector: 'app-my-heroes',
  styleUrls: ['./heroes.component.css'],
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  clickMessage = '';
  values = '';

  constructor(private heroService: HeroService,
              private router: Router, private logService: AppLogService) {
  };

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  };

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  onClickMe(): void {
    this.logService.log('onClick');
    this.clickMessage = 'you are click the button';
  }

  onKey(event: KeyboardEvent): void {
    this.logService.log(event);
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }

  update(value: String): void {
    this.values += value + ' | ';
  }
}


