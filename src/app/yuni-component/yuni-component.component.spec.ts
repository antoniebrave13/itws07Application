import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuniComponentComponent } from './yuni-component.component';

describe('YuniComponentComponent', () => {
  let component: YuniComponentComponent;
  let fixture: ComponentFixture<YuniComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YuniComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YuniComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
