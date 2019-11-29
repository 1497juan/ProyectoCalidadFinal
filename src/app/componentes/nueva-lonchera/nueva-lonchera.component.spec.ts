import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaLoncheraComponent } from './nueva-lonchera.component';

describe('NuevaLoncheraComponent', () => {
  let component: NuevaLoncheraComponent;
  let fixture: ComponentFixture<NuevaLoncheraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaLoncheraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaLoncheraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
