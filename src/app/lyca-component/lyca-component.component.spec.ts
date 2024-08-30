import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LycaComponentComponent } from './lyca-component.component';

describe('LycaComponentComponent', () => {
  let component: LycaComponentComponent;
  let fixture: ComponentFixture<LycaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LycaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LycaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
