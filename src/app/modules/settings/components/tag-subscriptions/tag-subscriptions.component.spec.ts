import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSubscriptionsComponent } from './tag-subscriptions.component';

describe('TagSubscriptionsComponent', () => {
  let component: TagSubscriptionsComponent;
  let fixture: ComponentFixture<TagSubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagSubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
