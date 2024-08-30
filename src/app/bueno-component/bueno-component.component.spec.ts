import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuenoComponentComponent } from './bueno-component.component';

describe('BuenoComponentComponent', () => {
  let component: BuenoComponentComponent;
  let fixture: ComponentFixture<BuenoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuenoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuenoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
