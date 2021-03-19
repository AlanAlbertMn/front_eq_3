import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorContabilidadComponent } from './operador-contabilidad.component';

describe('OperadorContabilidadComponent', () => {
  let component: OperadorContabilidadComponent;
  let fixture: ComponentFixture<OperadorContabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperadorContabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadorContabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
