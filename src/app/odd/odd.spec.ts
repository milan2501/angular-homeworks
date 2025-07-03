import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Odd } from './odd';

describe('Odd', () => {
  let component: Odd;
  let fixture: ComponentFixture<Odd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Odd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Odd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
