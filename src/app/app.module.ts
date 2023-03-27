import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { AppCardComponent } from './slider/card list/app-card/app-card.component';
import { CoursesCategoriesComponent } from './courses-categories/courses-categories.component';
import { PopularCoursesComponent } from './popular-courses/popular-courses.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // SliderComponent,
    FooterComponent,
    SliderComponent,
    AppCardComponent,
    CoursesCategoriesComponent,
    PopularCoursesComponent,


    // AppCardComponent,
    // SliderCardComponent,
    
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SliderModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
