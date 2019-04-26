import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionerComponent } from './dimensioner.component';

describe('DimensionerComponent', () => {
  let component: DimensionerComponent;
  let fixture: ComponentFixture<DimensionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimensionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
