//##################################################
//
// Konto Service
//
//Last Update:
//2018-07-27 : create
//
//###################################################



import {Injectable, OnInit} from '@angular/core';
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

 private kontenUrl = 'api/konten'; // URL to web api

  constructor(private http: HttpClient) {}

  getKonten(): Observable<Konto[]> {
    return this.http.get<Konto[]>(this.kontenUrl);
  }

  getById(id: number) {
    return this.http.get(this.kontenUrl + id);
  }
}
