import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelvinComponentComponent } from './melvin-component.component';

describe('MelvinComponentComponent', () => {
  let component: MelvinComponentComponent;
  let fixture: ComponentFixture<MelvinComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MelvinComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelvinComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
