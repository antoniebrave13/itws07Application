import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElaComponentComponent } from './ela-component.component';

describe('ElaComponentComponent', () => {
  let component: ElaComponentComponent;
  let fixture: ComponentFixture<ElaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
