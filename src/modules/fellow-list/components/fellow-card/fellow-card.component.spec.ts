import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowCardComponent } from './fellow-card.component';

describe('FellowCardComponent', () => {
  let component: FellowCardComponent;
  let fixture: ComponentFixture<FellowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FellowCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FellowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
