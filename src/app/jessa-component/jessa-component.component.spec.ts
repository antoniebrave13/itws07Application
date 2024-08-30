import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JessaComponentComponent } from './jessa-component.component';

describe('JessaComponentComponent', () => {
  let component: JessaComponentComponent;
  let fixture: ComponentFixture<JessaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JessaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JessaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
