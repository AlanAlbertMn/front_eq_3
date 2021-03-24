import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionMenuComponent } from './recepcion-menu.component';

describe('RecepcionMenuComponent', () => {
  let component: RecepcionMenuComponent;
  let fixture: ComponentFixture<RecepcionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
