import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowFilterComponent } from './fellow-filter.component';

describe('FellowFilterComponent', () => {
  let component: FellowFilterComponent;
  let fixture: ComponentFixture<FellowFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FellowFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FellowFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
