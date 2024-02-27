export class Email {
    receiver: string; // Definisci il tipo delle proprietà 
    subject: string; 
    text: string;
  
    constructor(receiver: HTMLInputElement, subject: HTMLInputElement, text: HTMLInputElement) { //costruttore (come __init__() di python)
      this.receiver = receiver.value; // Si specifica .value per restituire la stringa inserita dall'input
      this.subject = subject.value; //this è come il self di python, serve a riferirsi alle proprietà della classe 
      this.text = text.value;
    }
  }