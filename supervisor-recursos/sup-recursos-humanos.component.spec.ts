import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorRecursosHumanosComponent } from './sup-recursos-humanos.component';

describe('SupervisorRecursosHumanosComponent', () => {
  let component: SupervisorRecursosHumanosComponent;
  let fixture: ComponentFixture<SupervisorRecursosHumanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorRecursosHumanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorRecursosHumanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
