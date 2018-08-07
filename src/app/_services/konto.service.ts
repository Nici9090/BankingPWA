//##################################################
//
// Konto Service
//
//Last Update:
//2018-07-27 : create
//
//###################################################



import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';

import { environment } from '../../environments/environment';

import {Konto, User} from '../_models';




const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})


export class KontoService {

 private kontenUrl = 'api/konto-uebersicht'; // URL to web api

  constructor(private http: HttpClient) {}




//Variante I: Wie im Tour of Heroes Beispiel
  // Get Konto by ID funktioniert nicht

  getKonten(): Observable<Konto[]> {
    return this.http.get<Konto[]>(this.kontenUrl);
  }
  
//   getKonto(id: number): Observable<Konto[]> {
//     const url = `${this.kontenUrl}/${id}`;
//  //   return this.http.get<Konto>(url);
//   }

//Variante II: Wie im Login/Register Beispiel
  // funktioniert, aber welche Variante ist besser?
  /*
  getAll() {
    return this.http.get<Konto[]>(`${environment.apiUrl}/konto`);
  }
*/

  getById(id: number) {
    return this.http.get(`${environment.apiUrl}/konto-uebersicht/` + id);
  }
}
