import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightlightComponent } from './hightlight.component';

describe('HightlightComponent', () => {
  let component: HightlightComponent;
  let fixture: ComponentFixture<HightlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HightlightComponent]
    });
    fixture = TestBed.createComponent(HightlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
