import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvieComponentComponent } from './harvie-component.component';

describe('HarvieComponentComponent', () => {
  let component: HarvieComponentComponent;
  let fixture: ComponentFixture<HarvieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarvieComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarvieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
