import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// used to create fake backend
import {fakeBackendProvider} from './_helpers';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AlertComponent} from './_directives';
import {AuthGuard} from './_guards';
import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {AlertService, AuthenticationService, KontoService, UserService} from './_services';
import {InMemoryKontoService} from './_services/in-memory-data.service';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';;
import {EmpfaengerUebersichtComponent} from './empfaenger-uebersicht/empfaenger-uebersicht.component';
import {KontoUebersichtComponent} from './konto-uebersicht/konto-uebersicht.component'
import {MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule} from '@angular/material';;
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import { UmsatzService } from './_services/umsatz.service';
import { UmsatzUebersichtComponent } from './umsatz-uebersicht/umsatz-uebersicht.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryKontoService, {dataEncapsulation: false}
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EmpfaengerUebersichtComponent,
    KontoUebersichtComponent,
    UmsatzUebersichtComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    KontoService,
    UmsatzService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
