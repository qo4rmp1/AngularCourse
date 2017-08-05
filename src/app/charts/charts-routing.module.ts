import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlotComponent } from './flot/flot.component';

const routes: Routes = [
  //Step2:修改子路由(path: 'charts'在app-routing已設定)
  { path: 'flot', component: FlotComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
