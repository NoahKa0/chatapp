import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatguiComponent } from './chatgui.component';

describe('ChatguiComponent', () => {
  let component: ChatguiComponent;
  let fixture: ComponentFixture<ChatguiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatguiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatguiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
