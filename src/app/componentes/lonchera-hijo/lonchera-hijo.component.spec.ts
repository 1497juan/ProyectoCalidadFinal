import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoncheraHijoComponent } from './lonchera-hijo.component';

describe('LoncheraHijoComponent', () => {
  let component: LoncheraHijoComponent;
  let fixture: ComponentFixture<LoncheraHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoncheraHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoncheraHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
