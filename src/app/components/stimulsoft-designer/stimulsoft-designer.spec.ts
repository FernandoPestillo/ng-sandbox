import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StimulsoftDesigner } from './stimulsoft-designer';

describe('StimulsoftDesigner', () => {
  let component: StimulsoftDesigner;
  let fixture: ComponentFixture<StimulsoftDesigner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StimulsoftDesigner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StimulsoftDesigner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
