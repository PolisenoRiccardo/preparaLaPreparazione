import { Component, Input, HostBinding } from '@angular/core';
import { Email } from '../app.mail';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @HostBinding('attr.class') cssColor = 'card mt-3';
  @Input() mail: Email;
  nascondi : boolean;
  mostra : string;
  constructor() {
    this.mail = new Email('Sandro', 'Scusami', 'Dopo spinterogeno...')
    this.nascondi = false
    this.mostra = 'Espandi'
  }
  espandi() {
    this.nascondi = !this.nascondi;  // inverte il boolean 
  }
  speciale() {
    if (this.cssColor == 'card bg-warning mt-3') {
      this.cssColor = 'card mt-3';
    } else this.cssColor = 'card bg-warning mt-3';
  }
}