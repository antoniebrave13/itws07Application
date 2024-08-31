import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonicaComponentComponent } from './monica-component.component';

describe('MonicaComponentComponent', () => {
  let component: MonicaComponentComponent;
  let fixture: ComponentFixture<MonicaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonicaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonicaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
