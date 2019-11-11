import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHijosClienteComponent } from './lista-hijos-cliente.component';

describe('ListaHijosClienteComponent', () => {
  let component: ListaHijosClienteComponent;
  let fixture: ComponentFixture<ListaHijosClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaHijosClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHijosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
