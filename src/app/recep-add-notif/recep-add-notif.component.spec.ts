import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepAddNotifComponent } from './recep-add-notif.component';

describe('RecepAddNotifComponent', () => {
  let component: RecepAddNotifComponent;
  let fixture: ComponentFixture<RecepAddNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepAddNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepAddNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
