import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coockpit } from './coockpit';

describe('Coockpit', () => {
  let component: Coockpit;
  let fixture: ComponentFixture<Coockpit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Coockpit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coockpit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
