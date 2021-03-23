import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotifComponent } from './add-notif.component';

describe('AddNotifComponent', () => {
  let component: AddNotifComponent;
  let fixture: ComponentFixture<AddNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
