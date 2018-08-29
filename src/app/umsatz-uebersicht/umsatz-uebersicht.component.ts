import {Umsatz} from '../_models/umsatz';
import {UmsatzService} from '../_services/umsatz.service';
import {AppComponent} from '../app.component';
import {HttpClientModule} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Observable, Subject, asapScheduler, pipe, of, from,
  interval, merge, fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-umsatz-uebersicht',
  templateUrl: './umsatz-uebersicht.component.html',
  styleUrls: ['./umsatz-uebersicht.component.css']
})
export class UmsatzUebersichtComponent implements OnInit {
  umsaetze: Umsatz[];
  iban: string;

  constructor(
    private route: ActivatedRoute,
    private umsatzService: UmsatzService
  ) {}

  ngOnInit() {
    this.getUmsaetze();
    this.iban = this.route.snapshot.paramMap.get('iban');
  }

  getUmsaetze(): void {
    this.umsatzService.getUmsaetze()
      // .pipe(filter((umsatz) => umsatz.ibanAbs === this.iban))
      .subscribe(umsaetze => this.umsaetze = umsaetze);
  }
}
