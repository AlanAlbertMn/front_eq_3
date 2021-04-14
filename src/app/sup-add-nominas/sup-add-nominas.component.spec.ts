import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorAddNominasComponent } from './sup-add-nominas.component';

describe('SupervisorAddNominasComponent', () => {
  let component: SupervisorAddNominasComponent;
  let fixture: ComponentFixture<SupervisorAddNominasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorAddNominasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorAddNominasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
