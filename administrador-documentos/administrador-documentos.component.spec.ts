import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorDocumentosComponent } from './administrador-documentos.component';

describe('AdministradorDocumentosComponent', () => {
  let component: AdministradorDocumentosComponent;
  let fixture: ComponentFixture<AdministradorDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
