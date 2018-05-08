import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {DashboardComponent} from './dashboard.component'
import {AppRoutingModule} from './app-routing.moudle'
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {HeroSearchComponent} from './hero-search.component'
import {AppLogService} from './app-log.servoce';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';
import {AlarmDetailComponent} from './extend/alarm-detail/alarm-detail.component';
import {AlarmDetailService} from './extend/service/alarm-detail.service';
import {HttpClientModule} from '@angular/common/http';
import {ArrayFilterPipe} from './array-filter.pipe';
import {AngularTreeComponent} from './angular-tree/angular-tree.component';
import {TreeModule} from 'angular-tree-component';
import {EchartsComponentComponent} from './echarts-component/echarts-component.component';
import {HeroAddFormComponent} from './hero-add-form/hero-add-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductControllerService} from './api/productController.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    ExponentialStrengthPipe,
    AlarmDetailComponent,
    ArrayFilterPipe,
    AngularTreeComponent,
    EchartsComponentComponent,
    HeroAddFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpClientModule,
    TreeModule,
    ReactiveFormsModule
  ],
  providers: [HeroService, AppLogService, AlarmDetailService, ProductControllerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
