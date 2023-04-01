import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular-card',
  templateUrl: './popular-card.component.html',
  styleUrls: ['./popular-card.component.css']
})
export class PopularCardComponent {
  @Input()
  item:any
}
