import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorNominasComponent } from './operador-nominas.component';

describe('OperadorNominasComponent', () => {
  let component: OperadorNominasComponent;
  let fixture: ComponentFixture<OperadorNominasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperadorNominasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadorNominasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
