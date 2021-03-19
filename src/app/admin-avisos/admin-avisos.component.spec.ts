import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAvisosComponent } from './admin-avisos.component';

describe('AdminAvisosComponent', () => {
  let component: AdminAvisosComponent;
  let fixture: ComponentFixture<AdminAvisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAvisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
