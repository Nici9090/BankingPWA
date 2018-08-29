//##################################################
// in-memory-data
// Fake DataBase
//
//Last Update:
//2018-07-27 : create
//2018-08-05 : insert Kontodaten
//
//###################################################


import {Konto} from '../_models/konto';
import {Umsatz} from '../_models/umsatz';
import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryKontoService implements InMemoryDbService {
  createDb() {
    const konten = [
      new Konto(11, 'DE02120300000000202051', 'BYLADEM1001', 1001.10),
      new Konto(12, 'DE02500105170137075030', 'INGDDEFF', 2002.22),
      new Konto(13, 'DE02100500000054540402', 'BELADEBE', 3030.03)
    ];
    const umsaetze = [
      new Umsatz(1, 'DE02120300000000202051', 'DE02500105170137075030', 'Verwendung test 1', 1.00, new Date('08/29/2018')),
      new Umsatz(2, 'DE02120300000000202051', 'DE02500105170137075030', 'Verwendung test 2', 2.00, new Date('08/29/2018')),
      new Umsatz(3, 'DE02120300000000202051', 'DE02500105170137075030', 'Verwendung test 3', 300, new Date('08/29/2018')),
      new Umsatz(4, 'DE02120300000000202051', 'DE02500105170137075030', 'Verwendung test 4', 4.00, new Date('08/29/2018'))
    ];
    return {konten, umsaetze};
  }
}


//export class InMemoryUmsatzService implements InMemoryDbService {
//  createDb() {
//    return {umsaetze};
//  }
//}
