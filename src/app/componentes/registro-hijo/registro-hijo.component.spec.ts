import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHijoComponent } from './registro-hijo.component';

describe('RegistroHijoComponent', () => {
  let component: RegistroHijoComponent;
  let fixture: ComponentFixture<RegistroHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
