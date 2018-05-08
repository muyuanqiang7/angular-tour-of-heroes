import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-add-form',
  templateUrl: './hero-add-form.component.html',
  styleUrls: ['./hero-add-form.component.css']
})
export class HeroAddFormComponent implements OnInit {
  heroForm: FormGroup;
  hero: Hero = {id: 0, name: '12121'};

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.hero = {id: 2, name: 'muyuanqiang'};
    this.heroForm = this.formBuilder.group({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'password': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(8)
      ]),
    });
  }

  get name() {
    return this.heroForm.get('name');
  }

  get password() {
    return this.heroForm.get('password');
  }

  submit(formValue) {
    console.log(formValue);
  }
}
