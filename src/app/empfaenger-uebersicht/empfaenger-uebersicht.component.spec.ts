import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpfaengerUebersichtComponent } from './empfaenger-uebersicht.component';

describe('EmpfaengerUebersichtComponent', () => {
  let component: EmpfaengerUebersichtComponent;
  let fixture: ComponentFixture<EmpfaengerUebersichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpfaengerUebersichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpfaengerUebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
