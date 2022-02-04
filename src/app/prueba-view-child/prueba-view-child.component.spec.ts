import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaViewChildComponent } from './prueba-view-child.component';

describe('PruebaViewChildComponent', () => {
  let component: PruebaViewChildComponent;
  let fixture: ComponentFixture<PruebaViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaViewChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
