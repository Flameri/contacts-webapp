import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs';
import {DialogService} from '../../dialog/dialog.service';
import {map} from 'rxjs/operators';
import {errorHandler} from '@angular/platform-browser/src/browser';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private contactHttpService: ContactHttpService) {
  }

  getContacts(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }

  getCOntactById(id): Observable<Contact> {
    return this.contactHttpService.getById(id);
  }

  updateContact(contact): Observable<Contact> {
    return this.contactHttpService.put(contact);
  }

  createContact(contact): Observable<Contact> {
    return this.contactHttpService.post(contact);
  }

  deleteContact(contact): Observable<any> {
    return this.contactHttpService.delete(contact);
  }
}
