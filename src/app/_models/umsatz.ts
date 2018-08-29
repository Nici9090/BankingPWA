
export class Umsatz {

  constructor(public id: number,
    public ibanAbs: string,
    public ibanEmpf: string,
    public vwzweck: string,
    public umsatz: number,
    public datum: Date) {

  }
}
