import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SergalDetailComponent } from './sergal-detail.component';

describe('SergalDetailComponent', () => {
  let component: SergalDetailComponent;
  let fixture: ComponentFixture<SergalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SergalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SergalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
