import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasePage } from './release.page';

describe('ReleasePage', () => {
  let component: ReleasePage;
  let fixture: ComponentFixture<ReleasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
