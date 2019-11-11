import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMembresiaComponent } from './registro-membresia.component';

describe('RegistroMembresiaComponent', () => {
  let component: RegistroMembresiaComponent;
  let fixture: ComponentFixture<RegistroMembresiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMembresiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMembresiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
