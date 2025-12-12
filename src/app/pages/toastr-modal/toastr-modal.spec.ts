import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrModal } from './toastr-modal';

describe('ToastrModal', () => {
  let component: ToastrModal;
  let fixture: ComponentFixture<ToastrModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModal],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastrModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
