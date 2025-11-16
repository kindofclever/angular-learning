import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure } from './procedure';

describe('Procedure', () => {
  let component: Procedure;
  let fixture: ComponentFixture<Procedure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
