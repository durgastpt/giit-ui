import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private clist: any;
  // private catlist:any;
  constructor(private http: HttpClient) { }
  getAllCourses() {
    return this.http.get("assets/data/courses.json")
  }
  getCoursesByCid(cid: any) {
    // console.log("inside service",cid);
    
    let p = new Promise((resolve, reject) => {

      this.http.get("assets/data/courses.json").subscribe((data: any) => {
        console.log("course data=",data);
        
        this.clist = data;
        let filterlist=[];
        let found = false;
        let i,j=0;
        for (i = 0; i < this.clist.length; i++) {
          if (this.clist[i].cgid === cid) {
            console.log("filter data",this.clist[i]);

            filterlist[j]=this.clist[i];
            j++;
          }
        }
        
        if (filterlist.length >0) {
          resolve(filterlist);
        }
        else {
          reject("not found");
        }
      });
    });
    return p;
  }
  getAllCategory() {
    return this.http.get("assets/data/category.json")
  }
  // getCoursesByCgid(cgid: any) {
  //   let p = new Promise((resolve, reject) => {

  //     this.http.get("assets/data/category.json").subscribe((data: any) => {

  //       this.catlist = data;

  //       let found = false;
  //       let i;
  //       for (i = 0; i < this.catlist.length; i++) {
  //         if (this.catlist[i].cgid == cgid) {

  //           found = true;
  //           break;
  //         }
  //       }
  //       if (found == true) {
  //         resolve(this.catlist[i]);
  //       }
  //       else {
  //         reject("not found");
  //       }
  //     });
  //   });
  //   return p;
  // }
}
