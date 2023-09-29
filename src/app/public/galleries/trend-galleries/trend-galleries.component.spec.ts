import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendGalleriesComponent } from './trend-galleries.component';

describe('TrendGalleriesComponent', () => {
  let component: TrendGalleriesComponent;
  let fixture: ComponentFixture<TrendGalleriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendGalleriesComponent]
    });
    fixture = TestBed.createComponent(TrendGalleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
