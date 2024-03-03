import { Component, Input } from '@angular/core';
import { Email } from '../app.mail';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() mail: Email;
  nascondi : boolean;
  constructor() {
    this.mail = new Email('Sandro', 'Scusami', 'Dopo spinterogeno...')
    this.nascondi = false
  }
  espandi() {
    this.nascondi = !this.nascondi // inverte il boolean 
  }
}