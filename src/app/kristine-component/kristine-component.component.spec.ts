import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KristineComponentComponent } from './kristine-component.component';

describe('KristineComponentComponent', () => {
  let component: KristineComponentComponent;
  let fixture: ComponentFixture<KristineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KristineComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KristineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
