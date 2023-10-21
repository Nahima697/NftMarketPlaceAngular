import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNftComponent } from './delete-nft.component';

describe('DeleteNftComponent', () => {
  let component: DeleteNftComponent;
  let fixture: ComponentFixture<DeleteNftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteNftComponent]
    });
    fixture = TestBed.createComponent(DeleteNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
