import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

const routes: Routes = [
  // { path: 'slider', loadChildren: () => import('./slider/slider.module').then(m => m.SliderModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
