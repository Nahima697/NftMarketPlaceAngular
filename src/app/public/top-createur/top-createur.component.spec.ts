import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCreateurComponent } from './top-createur.component';

describe('TopCreateurComponent', () => {
  let component: TopCreateurComponent;
  let fixture: ComponentFixture<TopCreateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopCreateurComponent]
    });
    fixture = TestBed.createComponent(TopCreateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
