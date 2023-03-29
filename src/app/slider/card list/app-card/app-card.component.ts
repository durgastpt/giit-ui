import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent {
  @Input() item :any; 

}
