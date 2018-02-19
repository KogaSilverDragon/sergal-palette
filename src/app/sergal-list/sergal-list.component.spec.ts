import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SergalListComponent } from './sergal-list.component';

describe('SergalListComponent', () => {
  let component: SergalListComponent;
  let fixture: ComponentFixture<SergalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SergalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SergalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
