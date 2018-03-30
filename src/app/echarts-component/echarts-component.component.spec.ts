import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsComponentComponent } from './echarts-component.component';

describe('EchartsComponentComponent', () => {
  let component: EchartsComponentComponent;
  let fixture: ComponentFixture<EchartsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
