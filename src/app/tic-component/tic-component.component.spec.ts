import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicComponentComponent } from './tic-component.component';

describe('TicComponentComponent', () => {
  let component: TicComponentComponent;
  let fixture: ComponentFixture<TicComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicComponentComponent]
    });
    fixture = TestBed.createComponent(TicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
