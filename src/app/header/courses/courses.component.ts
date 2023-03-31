import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  private cid:any;
  public cdetail:any;
constructor(private route: ActivatedRoute,private cservice:CoursesService)
{
    this.cid=route.snapshot.paramMap.get("cid");
    console.log(this.cid);
    this.cdetail= cservice.getCoursesByCid(this.cid);
    console.log(this.cdetail);
    
    
}
}
