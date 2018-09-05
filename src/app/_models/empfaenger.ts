//##################################################
//Empf�nger Klasse
//
//
//Last Update:
//2018-07-27 : create
//
//###################################################

export class Empfaenger {
  //  iban: number;
  //  bic: string;
  //  name: string;
  //  vwzweck: string;
  //  betrag: number;
  constructor(public id: number,
    public iban: string,
    public bic: string,
    public empfName: string,
    public vwzweck: string,
    public betrag: number) {
  }

}