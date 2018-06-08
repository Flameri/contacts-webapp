import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactService} from './contact/services/contact.service';
import {ContactHttpService} from './contact/services/contact-http.service';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {ContactDetailComponent} from './contact/contact-list/contact-detail/contact-detail.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {MaterialComponentsModule} from './contact/ui/material-components/material-components.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialogModule, MatListModule, MatSnackBarModule} from '@angular/material';
import {AvatarModule} from 'ng2-avatar';
import {TextToColorPipe} from './contact/pipes/text-to-color.pipe';
import {NgPipesModule} from 'ngx-pipes';
import {ToolbarComponent} from './contact/ui/toolbar/toolbar.component';
import {ToolbarService} from './contact/ui/toolbar/toolbar.service';
import {LoginComponent} from './user/login/login.component';
import {TeardownLogic} from 'rxjs';
import {AuthenticationService} from './user/services/authentication.service';
import {TokenService} from './user/services/token.service';
import {DialogService} from './dialog/dialog.service';
import {DialogComponent} from './dialog/dialog.component';

const appRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/new', component: ContactDetailComponent},
  {path: 'contacts/:id', component: ContactDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    TextToColorPipe,
    ToolbarComponent,
    LoginComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MaterialComponentsModule,
    FlexLayoutModule,
    AvatarModule.forRoot(),
    NgPipesModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [
    ContactService,
    ContactHttpService,
    ToolbarService,
    AuthenticationService,
    TokenService,
    DialogService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {
}
