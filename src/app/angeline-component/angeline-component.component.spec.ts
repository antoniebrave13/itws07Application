import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngelineComponentComponent } from './angeline-component.component';

describe('AngelineComponentComponent', () => {
  let component: AngelineComponentComponent;
  let fixture: ComponentFixture<AngelineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngelineComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngelineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
