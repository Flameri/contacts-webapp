import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService) {
    /*
    this.contacts = [];
    this.contacts.push(new Contact(1, 'Arto', 'Lindgren'));
    this.contacts.push(new Contact(2, 'Antti', 'Karjalainen'));
    this.contacts.push(new Contact(3, 'Joku', 'Kolmas'));
    */
  }

  /*
    getContacts(): Contact[] {
      return this.contacts;
    */


  getContacts(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }
}
