import {Inject, Injectable} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {errorHandler} from '@angular/platform-browser/src/browser';
import {DialogComponent} from './dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  errorDialog(errorMessage: string) {
     const dialogRef = this.dialog.open(DialogComponent, {data: {message: errorMessage }});
  }
}


