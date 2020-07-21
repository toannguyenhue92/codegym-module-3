import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayCreateComponent } from './stay-create.component';

describe('StayCreateComponent', () => {
  let component: StayCreateComponent;
  let fixture: ComponentFixture<StayCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
