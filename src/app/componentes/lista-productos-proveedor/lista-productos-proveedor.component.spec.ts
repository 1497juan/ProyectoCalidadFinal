import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosProveedorComponent } from './lista-productos-proveedor.component';

describe('ListaProductosProveedorComponent', () => {
  let component: ListaProductosProveedorComponent;
  let fixture: ComponentFixture<ListaProductosProveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProductosProveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProductosProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
