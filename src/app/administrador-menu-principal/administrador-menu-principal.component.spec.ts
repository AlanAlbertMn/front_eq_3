import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorMenuPrincipalComponent } from './administrador-menu-principal.component';

describe('AdministradorMenuPrincipalComponent', () => {
  let component: AdministradorMenuPrincipalComponent;
  let fixture: ComponentFixture<AdministradorMenuPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorMenuPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorMenuPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
