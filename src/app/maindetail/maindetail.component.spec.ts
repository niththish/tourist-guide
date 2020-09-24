import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindetailComponent } from './maindetail.component';

describe('MaindetailComponent', () => {
  let component: MaindetailComponent;
  let fixture: ComponentFixture<MaindetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
