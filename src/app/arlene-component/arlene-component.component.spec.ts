import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArleneComponentComponent } from './arlene-component.component';

describe('ArleneComponentComponent', () => {
  let component: ArleneComponentComponent;
  let fixture: ComponentFixture<ArleneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArleneComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArleneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
