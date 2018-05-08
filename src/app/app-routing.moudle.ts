import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component'
import {EchartsComponentComponent} from './echarts-component/echarts-component.component';
import {AngularTreeComponent} from './angular-tree/angular-tree.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'echarts', component: EchartsComponentComponent},
  {path: 'tree', component: AngularTreeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
