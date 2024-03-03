import { Component } from '@angular/core';
import { Email } from './app.mail'; // importa la classe Email


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  casella: Email[]; //definisci casella come vettore di Email
  constructor() {
    this.casella = [
      new Email('Sandro', 'Te lo dovevo dire', 'Ho detto Sandro...') // definisci il contenuto del vettore casella
    ]
  }
  nuovaMail(receiver: HTMLInputElement, object:HTMLInputElement, text:HTMLInputElement): boolean { // la funzione nuova mail (collegata al bottone)
    this.casella.push(new Email(receiver.value, object.value, text.value)); // ad ogni click la funzione inserisce nel vettore casella un oggetto email con i valori corrispondenti a quelli inseriti con l'input
    console.log(this.casella)
    return false
  }
}
