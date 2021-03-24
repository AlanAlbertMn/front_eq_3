import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorContabilidadComponent } from './sup-contabilidad.component';

describe('SupervisorContabilidadComponent', () => {
  let component: SupervisorContabilidadComponent;
  let fixture: ComponentFixture<SupervisorContabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorContabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorContabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
