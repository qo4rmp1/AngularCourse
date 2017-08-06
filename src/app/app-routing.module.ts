import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { fallbackRoute } from './shared/fallback-route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginGuard } from './login.guard';
import { ClassicComponent } from './forms/classic/classic.component';
import { Classic2Component } from './forms/classic2/classic2.component';

const routes: Routes = [
  //StepB:設定login路由
  { path: 'login', component: LoginComponent },
  //StepE:設定layout路由(使用預設路由,並不會在URL多一個字元)
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'forms/classic', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      //StepI:修改路由,加上canActivate
      { path: 'cards/:type', component: CardsComponent },
      //Step1:路由設定延遲載入
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'forms/classic', component: ClassicComponent },
      { path: 'forms/classic2', component: Classic2Component }
    ]
  },

  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
