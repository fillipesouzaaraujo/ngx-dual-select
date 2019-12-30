import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDualSelectLibComponent } from './ngx-dual-select-lib.component';

describe('NgxDualSelectLibComponent', () => {
  let component: NgxDualSelectLibComponent;
  let fixture: ComponentFixture<NgxDualSelectLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDualSelectLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDualSelectLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
