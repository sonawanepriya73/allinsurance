import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffdeatailsComponent } from './staffdeatails.component';

describe('StaffdeatailsComponent', () => {
  let component: StaffdeatailsComponent;
  let fixture: ComponentFixture<StaffdeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffdeatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffdeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
