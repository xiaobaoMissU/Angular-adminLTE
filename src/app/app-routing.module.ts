import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from './component/test/test.component';

const routes: Routes = [
  { path: '', redirectTo: 'test', pathMatch: 'full' }, // 默认跳转test component
  { path: 'test/:id', component: TestComponent }, // 带参数路由
  { path: 'test', component: TestComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
