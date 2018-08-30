
export class Umsatz {

  constructor(public id: number,
    public ibanAbs: string,
    public ibanEmpf: string,
    public vwzweck: string,
    public umsatz: number,
    public datum: Date) {

  }

  static parse (json: any): Umsatz {
    const umsatz = new Umsatz(json.id, json.ibanAbs, json.ibanEmpf,
       json.vwzweck, json.umsatz, new Date(json.datum));
    console.log(umsatz);
    return umsatz;
  }
}

export class UmsatzRepresentation {

  constructor(
    public iban: string,
    public vwzweck: string,
    public umsatz: number,
    public datum: Date
  ) {

  }
}
