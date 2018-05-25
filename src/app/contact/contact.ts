import {s, st} from '@angular/core/src/render3';

export class Contact {
  id: number;
  streetAddress: string;
  city: string;
  postalCode: string;
  phoneNumber: string;
  emailAddress: string;
  firstName: string;
  lastName: string;


  constructor(id?: number, streetAddress?: string, city?: string, postalCode?: string, phoneNumber?: string, emailAddress?: string, firstName?: string, lastName?: string) {
    this.id = id;
    this.streetAddress = streetAddress;
    this.city = city;
    this.postalCode = postalCode;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
