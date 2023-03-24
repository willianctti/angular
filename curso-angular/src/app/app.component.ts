import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
 
export class AppComponent {
  public addValue: number = 1
  public getDados: {nome: string, idade: number} | undefined

  


  userName = 'Bruna';
  userData = {
    email: 'bruna1@gmail.com',
    idade: '19',
  }

  title = 'curso-angular';
  public add() {
    this.addValue += 1
  }

  public setDados(event: {nome: string, idade: number}) {
    this.getDados = event;
  }
}
