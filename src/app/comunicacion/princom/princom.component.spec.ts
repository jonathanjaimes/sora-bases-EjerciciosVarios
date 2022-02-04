import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincomComponent } from './princom.component';

describe('PrincomComponent', () => {
  let component: PrincomComponent;
  let fixture: ComponentFixture<PrincomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
