import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  public condition: boolean = true
  public nome: string = ""
  public lista: Array<{nome: string}> = []



  public list: Array<{ nome: string, idade: number}> = [
    { nome: "Willian Nicoletti", idade: 10 },
    { nome: "Bruna Nicoletti", idade: 18 },
    { nome: "Lucas Gonsalves", idade: 25 }
  ]




  ngOnInit(): void {
    setInterval( () => {
      if(this.condition){
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000 )
  }
 
  public salvar() {
    this.lista.push({nome: this.nome});
  }


  public onClickAddList() {
    this.list.push({nome: "Bruno", idade: 19})
  }
}
