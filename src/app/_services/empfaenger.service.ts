import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {Konto, User} from '../_models';
import {Empfaenger} from '../_models/empfaenger';



//const httpOptions = {
//  headers: new HttpHeaders({'Content-Type': 'application/json'})
//};

@Injectable({
  providedIn: 'root'
})

export class EmpfaengerService {

  private empfUrl = 'api/empf'; // URL to web api

  constructor(private http: HttpClient) {}

  getEmpf(): Observable<Empfaenger[]> {
    return this.http.get<Empfaenger[]>(this.empfUrl);
  }

  getById(id: number) {
    return this.http.get(this.empfUrl + id);
  }
}
