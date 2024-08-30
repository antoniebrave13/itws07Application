import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BravoComponentComponent } from './bravo-component.component';

describe('BravoComponentComponent', () => {
  let component: BravoComponentComponent;
  let fixture: ComponentFixture<BravoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BravoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BravoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
