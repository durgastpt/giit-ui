import { Component } from '@angular/core';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public clist:any;
  constructor(cservice:CoursesService)
  {
    cservice.getAllCategory().subscribe(data=>{
      console.log("cat=",data);
      
      this.clist=data;
    })
  }

}
