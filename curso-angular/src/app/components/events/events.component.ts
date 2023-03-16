import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  show: boolean = false;
  showResetButton = false;

  showMessage(): void {
    this.show = !this.show;
  }
 /* reset(): void {
    this.show = false
  } */ 
}
