import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionAvisosComponent } from './recepcion-avisos.component';

describe('RecepcionAvisosComponent', () => {
  let component: RecepcionAvisosComponent;
  let fixture: ComponentFixture<RecepcionAvisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionAvisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
