import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataChildComponent } from './data-child.component';

describe('DataChildComponent', () => {
  let component: DataChildComponent;
  let fixture: ComponentFixture<DataChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
