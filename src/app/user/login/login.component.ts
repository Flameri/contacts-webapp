import {Component, OnInit} from '@angular/core';
import {UserCredentials} from '../user-credentials';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {DialogComponent} from '../../dialog/dialog.component';
import {DialogService} from '../../dialog/dialog.service';

@Component({
  selector: 'cw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userCredentials: UserCredentials;
  loginFailed: boolean;
  errorMessage: string;

  constructor(private authenticate: AuthenticationService, private router: Router,
              private dialogService: DialogService) {
    this.userCredentials = new UserCredentials();
    this.loginFailed = false;
    this.errorMessage = '';
  }

  ngOnInit() {
    this.authenticate.signOutUser();
  }

  onSignIn() {
    console.log(this.userCredentials);
    this.loginFailed = false;
    this.errorMessage = '';
    this.authenticate.signInUser(this.userCredentials).subscribe(result => {
      this.router.navigate(['/contacts']);
    }, error => {
      this.userCredentials.username = '';
      this.userCredentials.password = '';
      this.loginFailed = true;
      this.errorMessage = 'Sign in failed';
      this.dialogService.errorDialog(this.errorMessage);
      console.error('User sign in failed');
    });
  }
}
