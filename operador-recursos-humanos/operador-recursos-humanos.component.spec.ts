import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorRecursosHumanosComponent } from './operador-recursos-humanos.component';

describe('OperadorRecursosHumanosComponent', () => {
  let component: OperadorRecursosHumanosComponent;
  let fixture: ComponentFixture<OperadorRecursosHumanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperadorRecursosHumanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadorRecursosHumanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
