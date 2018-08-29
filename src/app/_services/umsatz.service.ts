
import { Umsatz } from '../_models/umsatz';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UmsatzService {

 private umsatzUrl = 'api/umsaetze'; // URL to web api

  constructor(private http: HttpClient) {}

  getUmsaetze(): Observable<Umsatz[]> {
    return this.http.get<Umsatz[]>(this.umsatzUrl);
  }

  getById(id: number): Observable<Umsatz> {
    return this.http.get<Umsatz>(this.umsatzUrl + '/' + id);
  }

  getByIban(iban: string): Observable<Umsatz[]> {
    return this.http.get<Umsatz[]>(this.umsatzUrl);
  }
}
