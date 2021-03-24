import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepUsuariosComponent } from './recep-usuarios.component';

describe('RecepUsuariosComponent', () => {
  let component: RecepUsuariosComponent;
  let fixture: ComponentFixture<RecepUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
