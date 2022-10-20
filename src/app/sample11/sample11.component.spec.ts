import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample11Component } from './sample11.component';

describe('Sample11Component', () => {
  let component: Sample11Component;
  let fixture: ComponentFixture<Sample11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sample11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sample11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
