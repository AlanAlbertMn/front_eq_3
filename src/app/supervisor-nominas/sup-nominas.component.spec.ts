import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorNominasComponent } from './sup-nominas.component';

describe('SupervisorNominasComponent', () => {
  let component: SupervisorNominasComponent;
  let fixture: ComponentFixture<SupervisorNominasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorNominasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorNominasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
