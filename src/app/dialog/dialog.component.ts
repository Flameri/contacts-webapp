import {Component, Inject, OnInit} from '@angular/core';
import {DialogService} from './dialog.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'cw-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  message: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialogRef<DialogComponent>) {
    this.dialog.disableClose = true;
    this.message = data.message;
  }

  ngOnInit() {
  }

  close() {
    this.dialog.close();
  }
}
