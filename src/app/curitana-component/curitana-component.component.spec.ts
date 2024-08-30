import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuritanaComponentComponent } from './curitana-component.component';

describe('CuritanaComponentComponent', () => {
  let component: CuritanaComponentComponent;
  let fixture: ComponentFixture<CuritanaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuritanaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuritanaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
