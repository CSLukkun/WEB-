import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingeditComponent } from './shoppingedit.component';

describe('ShoppingeditComponent', () => {
  let component: ShoppingeditComponent;
  let fixture: ComponentFixture<ShoppingeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
