import { UmsatzRepresentation } from '../_models';
import {Umsatz} from '../_models/umsatz';
import { KontoService } from '../_services/konto.service';
import {UmsatzService} from '../_services/umsatz.service';
import {AppComponent} from '../app.component';
import {HttpClientModule} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Konto} from '../_models/konto';

import {
  Observable, Subject, asapScheduler, pipe, of, from,
  interval, merge, fromEvent
} from 'rxjs';

@Component({
  selector: 'app-umsatz-uebersicht',
  templateUrl: './umsatz-uebersicht.component.html',
  styleUrls: ['./umsatz-uebersicht.component.css']
})
export class UmsatzUebersichtComponent implements OnInit {
  umsaetze: UmsatzRepresentation[];
  iban: string;
  konten: Konto[];

  constructor(
    private route: ActivatedRoute,
    private umsatzService: UmsatzService,
    private kontoService: KontoService
  ) {}

  ngOnInit() {
    this.getUmsaetze();
    this.getKonten();
    this.iban = this.route.snapshot.paramMap.get('iban');
  }

  getUmsaetze(): void {
    this.umsatzService.getUmsaetze()
    .subscribe(umsaetze => this.umsaetze = this.mapToRepresentation( this.sortByDate(this.filterByIban(umsaetze))));
  }

  getKonten(): void {
    this.kontoService.getKonten()
      .subscribe(konten => this.konten = konten);
  }

  mapToRepresentation(umsaetze: Umsatz[]): UmsatzRepresentation[] {

    const reprs = [];

    for (let i = 0; i < umsaetze.length; i++) {
      const u = umsaetze[i];

      let angezeigteIban = null;
      let angezeigterUmsatz = null;

      if (this.iban === u.ibanEmpf) {
        angezeigteIban = u.ibanAbs;
        angezeigterUmsatz = u.umsatz;
      }

      if (this.iban === u.ibanAbs) {
        angezeigteIban = u.ibanEmpf;
        angezeigterUmsatz = -1 * u.umsatz;
      }

      let vwzweck = u.vwzweck;
      let datum = u.datum;

      const umsatzRep = new UmsatzRepresentation(angezeigteIban, vwzweck, angezeigterUmsatz, datum);

      reprs.push(umsatzRep);
    }

    return reprs;
  }

  filterByIban(umsaetze: Umsatz[]) {
      const ergebnis = [];

      for (let i = 0; i < umsaetze.length; i++) {
        const umsatz = umsaetze[i];
        if (this.iban === umsatz.ibanAbs || this.iban === umsatz.ibanEmpf) {
          ergebnis.push(umsatz);
        }
      }

      return ergebnis;
  }

  sortByDate(umsaetze: Umsatz[]) {
    return umsaetze.sort((a, b) => this.compareDates(a, b));
//    return umsaetze;
  }

  compareDates(a: any, b: any) {
    const umsatzA = Umsatz.parse(a);
    const umsatzB = Umsatz.parse(b);

    return umsatzB.datum.getTime() - umsatzA.datum.getTime();
  }
}
