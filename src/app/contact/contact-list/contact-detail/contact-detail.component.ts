import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../../services/contact.service';
import {Contact} from '../../contact';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarAction} from '../../ui/toolbar/toolbar-action';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {a} from '@angular/core/src/render3';
import {MatSnackBar} from '@angular/material/';
import {DialogService} from '../../../dialog/dialog.service';

@Component({
  selector: 'cw-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
              private contactService: ContactService,
              private toolbar: ToolbarService,
              public snackBar: MatSnackBar,
              public  dialogService: DialogService) {
    this.contact = new Contact();
    this.editingEnabled = false;
  }

  contact: Contact;
  editingEnabled: boolean;
  contactId: any;

  ngOnInit() {

    this.contactId = this.route.snapshot.paramMap.get('id');
    let toolbarActions: ToolbarAction [];

    if (this.contactId == null) {
      // Create contact
      this.editingEnabled = true;
      toolbarActions = [];
    } else {
      // View/ Edit contact
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];

      this.contactService.getCOntactById(this.contactId).subscribe(response => {
        this.contact = response;
        console.log(this.contact);
      }, error => {
        console.error('Getting contact failed!');
        console.error(error);
        this.router.navigate(['/contacts']);
      });
    }

    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact', toolbarActions));
  }

  onSave(): void {
    if (this.contactId == null) {
      // Create contact
      this.editingEnabled = false;
      this.contactService.createContact(this.contact).subscribe(response => {
        console.log(response);
        this.router.navigate(['/contacts']);
        this.onCreateNotification('Contact created!', 'Close');
      });
    } else {
      // Edit contact
      this.editingEnabled = false;
      this.contactService.updateContact(this.contact).subscribe(response => {
        this.contact = response;
        this.onEditNotification('Contact edited!', 'Close');
      });
    }
  }

  onEdit() {
    let toolbarActions: ToolbarAction[];
    this.editingEnabled = !this.editingEnabled;
    if (this.editingEnabled === true) {
      // Edit mode on
      console.log('Edit mode enabled');
      toolbarActions = [
        new ToolbarAction(this.onDelete.bind(this), 'delete'),
        new ToolbarAction(this.onEdit.bind(this), 'edit')
      ];
    } else {
      // Edit mode off
      console.log('Edit mode disabled');
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];
    }
    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact', toolbarActions));
  }


  onDelete() {
    this.editingEnabled = false;
    this.contactService.deleteContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);
      this.onDeleteNotification('Contact deleted', 'Close');
    });
  }


  onEditNotification(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  onDeleteNotification(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  onCreateNotification(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
