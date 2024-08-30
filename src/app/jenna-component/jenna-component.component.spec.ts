import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JennaComponentComponent } from './jenna-component.component';

describe('JennaComponentComponent', () => {
  let component: JennaComponentComponent;
  let fixture: ComponentFixture<JennaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JennaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JennaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
