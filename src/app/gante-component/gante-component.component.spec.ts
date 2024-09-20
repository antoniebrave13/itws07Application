import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanteComponentComponent } from './gante-component.component';

describe('GanteComponentComponent', () => {
  let component: GanteComponentComponent;
  let fixture: ComponentFixture<GanteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GanteComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
