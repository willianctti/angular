import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Bruna';
  userData = {
    email: 'bruna1@gmail.com',
    idade: '19',
  }


  title = 'curso-angular';
}
