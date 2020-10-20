import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceParentComponent } from './service-parent.component';

describe('ServiceParentComponent', () => {
  let component: ServiceParentComponent;
  let fixture: ComponentFixture<ServiceParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
