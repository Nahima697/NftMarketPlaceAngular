import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighLightComponent } from './high-light.component';

describe('HighLightComponent', () => {
  let component: HighLightComponent;
  let fixture: ComponentFixture<HighLightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighLightComponent]
    });
    fixture = TestBed.createComponent(HighLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
