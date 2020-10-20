import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalChildComponent } from './local-child.component';

describe('LocalChildComponent', () => {
  let component: LocalChildComponent;
  let fixture: ComponentFixture<LocalChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
