import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendNftComponent } from './trend-nft.component';

describe('TrendNftComponent', () => {
  let component: TrendNftComponent;
  let fixture: ComponentFixture<TrendNftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendNftComponent]
    });
    fixture = TestBed.createComponent(TrendNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
