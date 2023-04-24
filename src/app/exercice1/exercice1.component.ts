import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  lien :string = 'https://unsplash.com/fr/photos/I7oLRdM9YIw';
  countValue :number = 1;
  filtre :string = "recherche" ;

  increment() {
    this.countValue++;
  }
}
