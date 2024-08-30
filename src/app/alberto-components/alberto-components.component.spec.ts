import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbertoComponentsComponent } from './alberto-components.component';

describe('AlbertoComponentsComponent', () => {
  let component: AlbertoComponentsComponent;
  let fixture: ComponentFixture<AlbertoComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbertoComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbertoComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
