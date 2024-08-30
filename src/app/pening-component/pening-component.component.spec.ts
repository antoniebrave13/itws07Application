import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeningComponentComponent } from './pening-component.component';

describe('PeningComponentComponent', () => {
  let component: PeningComponentComponent;
  let fixture: ComponentFixture<PeningComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeningComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeningComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
