import {AppComponent} from '../app.component';
import {HttpClientModule} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

//Konto Service
import {KontoService} from '../_services/konto.service';
import {Konto} from '../_models/konto';

//import {NgModule} from '@angular/core';
//import {BrowserModule} from '@angular/platform-browser';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@Component({
  selector: 'app-konto-uebersicht',
  templateUrl: './konto-uebersicht.component.html',
  styleUrls: ['./konto-uebersicht.component.css']
})
export class KontoUebersichtComponent implements OnInit {
  selectedRow;
  konten: Konto[];


  constructor(
    private route: ActivatedRoute, //  holds information about the route to this instance of the DetailComponent
    private kontoService: KontoService // gets data from the remote server
  ) {}

  ngOnInit() {
    this.getKonten();
  }


  getKonten(): void {
    this.kontoService.getKonten()
      .subscribe(konten => this.konten = konten);
  }

  getSelectedRow() {
    if (this.selectedRow === undefined) {
      return 'NOTHING';
    } else {
      return JSON.stringify(this.selectedRow);
    }
  }


  // ## Testing
  //  onRowClicked(row) {
  //    console.log('Row clicked: ', row); //Ausgabe in Konsole
  //  }
}
