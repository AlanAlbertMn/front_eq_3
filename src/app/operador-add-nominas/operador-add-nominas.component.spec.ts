import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorAddNominasComponent } from './operador-add-nominas.component';

describe('OperadorAddNominasComponent', () => {
  let component: OperadorAddNominasComponent;
  let fixture: ComponentFixture<OperadorAddNominasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperadorAddNominasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadorAddNominasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
