import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorAddContabilidadComponent } from './operador-add-contabilidad.component';

describe('OperadorAddContabilidadComponent', () => {
  let component: OperadorAddContabilidadComponent;
  let fixture: ComponentFixture<OperadorAddContabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperadorAddContabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadorAddContabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
