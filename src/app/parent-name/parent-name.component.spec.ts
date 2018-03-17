import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNameComponent } from './parent-name.component';

describe('ParentNameComponent', () => {
  let component: ParentNameComponent;
  let fixture: ComponentFixture<ParentNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
