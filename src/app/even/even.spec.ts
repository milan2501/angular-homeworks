import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Even } from './even';

describe('Even', () => {
  let component: Even;
  let fixture: ComponentFixture<Even>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Even]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Even);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
