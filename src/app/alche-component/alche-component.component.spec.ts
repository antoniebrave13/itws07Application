import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcheComponentComponent } from './alche-component.component';

describe('AlcheComponentComponent', () => {
  let component: AlcheComponentComponent;
  let fixture: ComponentFixture<AlcheComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlcheComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlcheComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
