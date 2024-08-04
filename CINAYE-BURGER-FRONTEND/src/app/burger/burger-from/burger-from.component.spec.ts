import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerFromComponent } from './burger-from.component';

describe('BurgerFromComponent', () => {
  let component: BurgerFromComponent;
  let fixture: ComponentFixture<BurgerFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BurgerFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
