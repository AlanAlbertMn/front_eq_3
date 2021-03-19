import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpMenuComponent } from './op-menu.component';

describe('OpMenuComponent', () => {
  let component: OpMenuComponent;
  let fixture: ComponentFixture<OpMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
