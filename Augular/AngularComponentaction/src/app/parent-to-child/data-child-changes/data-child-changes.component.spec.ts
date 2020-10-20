import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataChildChangesComponent } from './data-child-changes.component';

describe('DataChildChangesComponent', () => {
  let component: DataChildChangesComponent;
  let fixture: ComponentFixture<DataChildChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataChildChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataChildChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
