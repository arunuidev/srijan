import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventCodeComponent } from './advent-code.component';

describe('AdventCodeComponent', () => {
  let component: AdventCodeComponent;
  let fixture: ComponentFixture<AdventCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
