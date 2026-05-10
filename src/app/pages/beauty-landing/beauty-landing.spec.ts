import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyLanding } from './beauty-landing';

describe('BeautyLanding', () => {
  let component: BeautyLanding;
  let fixture: ComponentFixture<BeautyLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeautyLanding],
    }).compileComponents();

    fixture = TestBed.createComponent(BeautyLanding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
