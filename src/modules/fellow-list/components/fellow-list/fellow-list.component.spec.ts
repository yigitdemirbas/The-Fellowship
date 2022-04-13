import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowListComponent } from './fellow-list.component';

describe('FellowListComponent', () => {
  let component: FellowListComponent;
  let fixture: ComponentFixture<FellowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FellowListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FellowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
