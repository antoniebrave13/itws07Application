import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RonComponentComponent } from './ron-component.component';

describe('RonComponentComponent', () => {
  let component: RonComponentComponent;
  let fixture: ComponentFixture<RonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RonComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
