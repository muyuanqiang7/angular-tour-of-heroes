import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component'
import {EchartsComponentComponent} from './echarts-component/echarts-component.component';
import {AngularTreeComponent} from './angular-tree/angular-tree.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path: 'echarts', outlet: 'aux', component: EchartsComponentComponent},
      {path: 'tree', outlet: 'aux', component: AngularTreeComponent}
    ]
  },
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
