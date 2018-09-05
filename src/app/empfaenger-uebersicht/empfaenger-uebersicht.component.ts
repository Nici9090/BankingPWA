import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

// Empfänger Service
import {EmpfaengerService} from '../_services/empfaenger.service';
import {Empfaenger} from '../_models/empfaenger';








@Component({
  selector: 'app-empfaenger-uebersicht',
  templateUrl: './empfaenger-uebersicht.component.html',
  styleUrls: ['./empfaenger-uebersicht.component.css']
})
export class EmpfaengerUebersichtComponent implements OnInit {
  empf: Empfaenger[];
  selectedRow;


  constructor(
    private route: ActivatedRoute, //  holds information about the route to this instance of the DetailComponent
    private empfaengerService: EmpfaengerService
  ) {}

  ngOnInit() {
    this.getEmpfaenger();
  }


  getEmpfaenger(): void {
    this.empfaengerService.getEmpf()
      .subscribe(empfaenger => this.empf = empfaenger);
  }

  getSelectedRow() {
    if (this.selectedRow === undefined) {
      return 'NOTHING';
    } else {
//      return this.selectedRow;
      return JSON.stringify(this.selectedRow);
    }
  }

  // ## Testing
  onRowClicked(row) {
    console.log('Row clicked: ', row); //Ausgabe in Konsole
  }

}
