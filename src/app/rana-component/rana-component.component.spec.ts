import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanaComponentComponent } from './rana-component.component';

describe('RanaComponentComponent', () => {
  let component: RanaComponentComponent;
  let fixture: ComponentFixture<RanaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RanaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RanaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
