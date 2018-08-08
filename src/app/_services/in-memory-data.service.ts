(in-memory-data//##################################################
//
// Fake DataBase
//
//Last Update:
//2018-07-27 : create
//2018-08-05 : insert Kontodaten
//
//###################################################


import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const konten = [
      {   id: 11, iban: 'DE02120300000000202051', bic: 'BYLADEM1001', bank: 'DEUTSCHE KREDITBANK BERLIN', umsatz: 1000.10},
      {   id: 12, iban: 'DE02500105170137075030', bic: 'INGDDEFF', bank: 'ING-DIBA', umsatz: 2002.22},
      {   id: 13, iban: 'DE02100500000054540402', bic: 'BELADEBE', bank: 'LANDESBANK BERLIN', umsatz: 3030.03}
    ];
    return {konten};
  }
}


//export class InMemoryDataService implements InMemoryDbService {
//  createDb() {
//    const konten = [
//      {   id: 11, iban: 'DE02120300000000202051', bic: 'BYLADEM1001', bank: 'DEUTSCHE KREDITBANK BERLIN', empfaenger: 'Empfänger1'},
//      {   id: 12, iban: 'DE02500105170137075030', bic: 'INGDDEFF', bank: 'ING-DIBA', empfaenger: 'Empfänger2'},
//      {   id: 13, iban: 'DE02100500000054540402', bic: 'BELADEBE', bank: 'LANDESBANK BERLIN', empfaenger: 'Empfänger3'}
//    ];
//    return {konten};
//  }
//}
