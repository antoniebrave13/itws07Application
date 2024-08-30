import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneComponentComponent } from './anne-component.component';

describe('AnneComponentComponent', () => {
  let component: AnneComponentComponent;
  let fixture: ComponentFixture<AnneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnneComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
