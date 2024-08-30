import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AramayComponentComponent } from './aramay-component.component';

describe('AramayComponentComponent', () => {
  let component: AramayComponentComponent;
  let fixture: ComponentFixture<AramayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AramayComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AramayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
