import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayEditComponent } from './stay-edit.component';

describe('StayEditComponent', () => {
  let component: StayEditComponent;
  let fixture: ComponentFixture<StayEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
