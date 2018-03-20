import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessNewDirectiveComponent } from './less-new-directive.component';

describe('LessNewDirectiveComponent', () => {
  let component: LessNewDirectiveComponent;
  let fixture: ComponentFixture<LessNewDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessNewDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessNewDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
