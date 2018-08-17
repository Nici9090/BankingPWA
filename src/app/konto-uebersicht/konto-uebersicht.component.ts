//##################################################
//
// Konto Übersicht Komponenten
//
//Last Update:
//2018-07-27 : create
//2018-08-05 : import Konto Service
//2018-08-05 : add ngModule für Tabelle
//2018-08-05 : add getKonten()
//
//###################################################


import {AppComponent} from '../app.component';
import {HttpClientModule} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

//Konto Service
import {KontoService} from '../_services/konto.service';
import {Konto} from '../_models/konto';


//import Module für mat-table für Kontoübersicht
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatTableDataSource
} from "@angular/material";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-konto-uebersicht',
  templateUrl: './konto-uebersicht.component.html',
  styleUrls: ['./konto-uebersicht.component.css']
})
export class KontoUebersichtComponent implements OnInit {
  konten: Konto[];
  dataSource;

  constructor(
    private route: ActivatedRoute, //  holds information about the route to this instance of the HeroDetailComponent
    private kontoService: KontoService // gets hero data from the remote server and this component will use it to get the hero-to-display.
    //    private location: Location // Angular service for interacting with the browser -> navigate back to the view that navigated here
  ) {}

  //  ######################
  //  Tabelle Kontoübersicht

  //  The values of this array are the column keys, which need to be identical to the names of the ng-container column sections 
  columnsToDisplay = ['id', 'iban', 'bic', 'umsatz'];


  // click data row
  onRowClicked(row) {
    console.log('Row clicked: ', row); //Ausgabe in Konsole
  }

  ngOnInit() {
//    this.getKonten();

    const tableArr: Konto[] = [
      {id: 11, iban: 'DE02120300000000202051', bic: 'BYLADEM1001', umsatz: 1000.10},
      {id: 12, iban: 'DE02500105170137075030', bic: 'INGDDEFF', umsatz: 2002.22},
      {id: 13, iban: 'DE02100500000054540402', bic: 'BELADEBE', umsatz: 3030.03}
    ];
    this.dataSource = new MatTableDataSource(tableArr);
  }

  // Hero Template nur angepasst

  getKonten(): void {
    this.kontoService.getKonten()
      .subscribe(konten => this.konten = konten);
  }

}
