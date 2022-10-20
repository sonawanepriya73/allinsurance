import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgdepartmentComponent } from './pgdepartment.component';

describe('PgdepartmentComponent', () => {
  let component: PgdepartmentComponent;
  let fixture: ComponentFixture<PgdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgdepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
