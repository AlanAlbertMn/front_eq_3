import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepAddUsuarioComponent } from './recep-add-usuario.component';

describe('RecepAddUsuarioComponent', () => {
  let component: RecepAddUsuarioComponent;
  let fixture: ComponentFixture<RecepAddUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepAddUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepAddUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
