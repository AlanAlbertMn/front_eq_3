import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupMenuComponent } from './sup-menu.component';

describe('SupComponent', () => {
  let component: SupMenuComponent;
  let fixture: ComponentFixture<SupMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
