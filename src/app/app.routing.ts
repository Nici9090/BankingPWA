//##################################################
//
// Routing
//
//Last Update:
//2018-07-26 : create by Login/Registration template
//2018-08-05 : add konto-uebersicht
//
//###################################################


import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

import {KontoUebersichtComponent} from './konto-uebersicht';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

  { path: 'konto-uebersicht', component: KontoUebersichtComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
