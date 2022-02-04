import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPrincipalComponent } from './hijo-principal.component';

describe('HijoPrincipalComponent', () => {
  let component: HijoPrincipalComponent;
  let fixture: ComponentFixture<HijoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
