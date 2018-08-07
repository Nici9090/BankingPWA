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
  MatSortModule, MatTableModule
} from "@angular/material";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




@Component({
  selector: 'app-konto-uebersicht',
  templateUrl: './konto-uebersicht.component.html',
  styleUrls: ['./konto-uebersicht.component.css']
})


//ngModule für Tabelle   
@NgModule({
  declarations: [
    //... 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  providers: [
    //...
  ],
  bootstrap: [AppComponent] //??
})



export class KontoUebersichtComponent implements OnInit {
  konten: Konto[];

  constructor(
    private route: ActivatedRoute, //  holds information about the route to this instance of the HeroDetailComponent
    private kontoService: KontoService, // gets hero data from the remote server and this component will use it to get the hero-to-display.
    private location: Location // Angular service for interacting with the browser -> navigate back to the view that navigated here
  ) {}





  //  ######################
  //  Tabelle Kontoübersicht

  //  The values of this array are the column keys, which need to be identical to the names of the ng-container column sections 
  columnsToDisplay = ['id', 'iban', 'bic', 'bank', 'umsatz'];


  // click data row
  onRowClicked(row) {
    console.log('Row clicked: ', row); //Ausgabe in Konsole
  }
  //  #####################  

  ngOnInit() {
    this.getKonten();
  }

  // Hero Template nur angepasst

  getKonten(): void {
    this.kontoService.getKonten()
      .subscribe(konten => this.konten = konten);
  }

}
