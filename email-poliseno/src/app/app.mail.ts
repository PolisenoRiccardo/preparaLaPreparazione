export class Email {
    receiver: string; // Definisci il tipo delle proprietà 
    subject: string; 
    text: string;
  
    constructor(receiver: string, subject: string, text: string) { //costruttore (come __init__() di python)
      this.receiver = receiver; // Si specifica .value per restituire la stringa inserita dall'input
      this.subject = subject; //this è come il self di python, serve a riferirsi alle proprietà della classe 
      this.text = text;
    }
  }