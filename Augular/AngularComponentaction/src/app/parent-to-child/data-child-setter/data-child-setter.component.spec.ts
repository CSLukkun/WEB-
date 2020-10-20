import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataChildSetterComponent } from './data-child-setter.component';

describe('DataChildSetterComponent', () => {
  let component: DataChildSetterComponent;
  let fixture: ComponentFixture<DataChildSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataChildSetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataChildSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
