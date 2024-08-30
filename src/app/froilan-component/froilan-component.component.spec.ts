import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FroilanComponentComponent } from './froilan-component.component';

describe('FroilanComponentComponent', () => {
  let component: FroilanComponentComponent;
  let fixture: ComponentFixture<FroilanComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FroilanComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FroilanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
