import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { HomeComponent } from './header/home/home.component';
import { AboutComponent } from './header/about/about.component';
import { ContactComponent } from './header/contact/contact.component';
import { HomeeComponent } from './homee/homee.component';
import { CoursesComponent } from './header/courses/courses.component';

const routes: Routes = [
  { path: '', component: HomeeComponent },
  { path: 'home', component: HomeeComponent },
  { path: 'about', component: AboutComponent },
  { path:'courses/:cid', component:CoursesComponent},
  { path: 'contact', component: ContactComponent },
  // { path: 'slider', loadChildren: () => import('./slider/slider.module').then(m => m.SliderModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
