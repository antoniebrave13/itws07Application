import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpComponentComponent } from './jp-component.component';

describe('JpComponentComponent', () => {
  let component: JpComponentComponent;
  let fixture: ComponentFixture<JpComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JpComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
