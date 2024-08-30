import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JastineComponentComponent } from './jastine-component.component';

describe('JastineComponentComponent', () => {
  let component: JastineComponentComponent;
  let fixture: ComponentFixture<JastineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JastineComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JastineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
