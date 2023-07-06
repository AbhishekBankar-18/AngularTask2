import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormData2Component } from './form-data2.component';

describe('FormData2Component', () => {
  let component: FormData2Component;
  let fixture: ComponentFixture<FormData2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormData2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormData2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
