import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorAddContabilidadComponent } from './sup-add-contabilidad.component'

describe('SupervisorAddContabilidadComponent', () => {
  let component: SupervisorAddContabilidadComponent;
  let fixture: ComponentFixture<SupervisorAddContabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorAddContabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorAddContabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
