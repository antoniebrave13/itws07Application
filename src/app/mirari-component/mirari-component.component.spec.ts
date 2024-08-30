import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirariComponentComponent } from './mirari-component.component';

describe('MirariComponentComponent', () => {
  let component: MirariComponentComponent;
  let fixture: ComponentFixture<MirariComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MirariComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MirariComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
