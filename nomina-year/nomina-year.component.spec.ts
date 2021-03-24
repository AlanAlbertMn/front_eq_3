import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominaYearComponent } from './nomina-year.component';

describe('NominaYearComponent', () => {
  let component: NominaYearComponent;
  let fixture: ComponentFixture<NominaYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominaYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominaYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
