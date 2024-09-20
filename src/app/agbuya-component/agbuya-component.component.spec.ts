import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgbuyaComponentComponent } from './agbuya-component.component';

describe('AgbuyaComponentComponent', () => {
  let component: AgbuyaComponentComponent;
  let fixture: ComponentFixture<AgbuyaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgbuyaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgbuyaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
