import {Injectable} from '@angular/core';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact('Arto', 'Lindgren'));
    this.contacts.push(new Contact('Antti', 'Karjalainen'));
    this.contacts.push(new Contact('Joku', 'Kolmas'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}
