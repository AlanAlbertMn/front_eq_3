import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupAddRhComponent } from './sup-add-rh.component';

describe('SupAddRhComponent', () => {
  let component: SupAddRhComponent;
  let fixture: ComponentFixture<SupAddRhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupAddRhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupAddRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
