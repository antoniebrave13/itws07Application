import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElyComponentComponent } from './ely-component.component';

describe('ElyComponentComponent', () => {
  let component: ElyComponentComponent;
  let fixture: ComponentFixture<ElyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElyComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
