import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  private cid: any;
  public cdetail: any;
  constructor(private route: ActivatedRoute, private cservice: CoursesService) {
    // this.cid=route.snapshot.paramMap.get("cid");



  }
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      //"product" is obtained from 'ProductResolver'
      this.cid = params.cid;

      console.log(params.cid);
      this.cservice.getCoursesByCid(this.cid).then((data: any) => {
        console.log(data);
        this.cdetail = data;

      }, (error) => {

      })
    });
  }
}
