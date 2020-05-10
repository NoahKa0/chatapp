import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatmembersComponent } from './chatmembers.component';

describe('ChatmembersComponent', () => {
  let component: ChatmembersComponent;
  let fixture: ComponentFixture<ChatmembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatmembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
