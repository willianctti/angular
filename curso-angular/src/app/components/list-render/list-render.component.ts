import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animalDetails = ''
  animals: Animal[] = [
    {name: "Baleia", type: "Mar", age: 4},
    {name: "Esquilo", type: "Terra", age: 10},
    {name: "Calopsita", type: "ar", age: 57}
  ]
  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }
}
