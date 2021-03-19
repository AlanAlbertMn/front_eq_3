import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpAddDocumentComponent } from './op-add-document.component';

describe('OpAddDocumentComponent', () => {
  let component: OpAddDocumentComponent;
  let fixture: ComponentFixture<OpAddDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpAddDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpAddDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
