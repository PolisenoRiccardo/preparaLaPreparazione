import { Component, Input, HostBinding } from '@angular/core';
import { Email } from '../app.mail';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @HostBinding('attr.class') cssClass = 'card mt-3';
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