import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControl } from './game-control';

describe('GameControl', () => {
  let component: GameControl;
  let fixture: ComponentFixture<GameControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
