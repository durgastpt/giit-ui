import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  // heading = 'angular';
  public courses=[
    {"icon":"assets/img/course-1.jpg","heading":"angular1","description":"asdmnbasdmnskdaksdhaksjd hkajshd sakdhjk"},
    {"icon":"fa fa-user","heading":"angular2","description":"asdmnbasdmnskdaksdhaksjd hkajshd sakdhjk"},
    {"icon":"fa fa-user","heading":"angular3","description":"asdmnbasdmnskdaksdhaksjd hkajshd sakdhjk"},
    {"icon":"fa fa-user","heading":"angular4","description":"asdmnbasdmnskdaksdhaksjd hkajshd sakdhjk"},
    // {"icon":"fa fa-user","heading":"angular","description":"asdmnbasdmnskdaksdhaksjd hkajshd sakdhjk"},
  ];
}

