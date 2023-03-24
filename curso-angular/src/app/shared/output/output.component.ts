import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  @Output() public enviarDados = new EventEmitter();
  public list: Array<{nome: string, idade: number}> = [
    { nome: "WIlian", idade: 29},
    { nome: "Bruna", idade: 87},
    { nome: "Lucas", idade: 19}
  ]

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);

  }
}
