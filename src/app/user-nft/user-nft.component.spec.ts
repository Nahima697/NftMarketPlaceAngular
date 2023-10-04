import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNftComponent } from './user-nft.component';

describe('UserNftComponent', () => {
  let component: UserNftComponent;
  let fixture: ComponentFixture<UserNftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserNftComponent]
    });
    fixture = TestBed.createComponent(UserNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
