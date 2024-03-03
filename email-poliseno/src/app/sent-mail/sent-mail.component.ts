import { Component, Input } from '@angular/core';
import { Email } from '../app.mail';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() mail: Email;
  constructor() {
    this.mail = new Email('Sandro', 'Scusami', 'Dopo spinterogeno...')
  }
}