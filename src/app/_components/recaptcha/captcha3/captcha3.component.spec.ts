import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Captcha3Component } from './captcha3.component';

describe('Captcha3Component', () => {
  let component: Captcha3Component;
  let fixture: ComponentFixture<Captcha3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Captcha3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Captcha3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
