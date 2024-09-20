import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsraComponentComponent } from './isra-component.component';

describe('IsraComponentComponent', () => {
  let component: IsraComponentComponent;
  let fixture: ComponentFixture<IsraComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsraComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsraComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
