import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedUserComponent } from './connected-user.component';

describe('ConnectedUserComponent', () => {
  let component: ConnectedUserComponent;
  let fixture: ComponentFixture<ConnectedUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectedUserComponent]
    });
    fixture = TestBed.createComponent(ConnectedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
