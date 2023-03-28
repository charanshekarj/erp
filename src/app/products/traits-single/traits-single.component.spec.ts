import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitsSingleComponent } from './traits-single.component';

describe('TraitsSingleComponent', () => {
  let component: TraitsSingleComponent;
  let fixture: ComponentFixture<TraitsSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitsSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
