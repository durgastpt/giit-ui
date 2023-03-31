import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private clist: any;
  constructor(private http: HttpClient) { }
  getAllCourses() {
    return this.http.get("assets/data/courses.json")
  }
  getCoursesByCid(cid: any) {
    let p = new Promise((resolve, reject) => {

      this.http.get("assets/data/courses.json").subscribe((data: any) => {

        this.clist = data;

        let found = false;
        let i;
        for (i = 0; i < this.clist.length; i++) {
          if (this.clist[i].cid == cid) {

            found = true;
            break;
          }
        }
        if (found == true) {
          resolve(this.clist[i]);
        }
        else {
          reject("not found");
        }
      });
    });
    return p;
  }
}
