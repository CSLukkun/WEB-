import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalParentComponent } from './local-parent.component';

describe('LocalParentComponent', () => {
  let component: LocalParentComponent;
  let fixture: ComponentFixture<LocalParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
