import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StimulsoftReport } from './stimulsoft-report';

describe('StimulsoftReport', () => {
  let component: StimulsoftReport;
  let fixture: ComponentFixture<StimulsoftReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StimulsoftReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StimulsoftReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
