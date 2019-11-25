import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMembresiasComponent } from './lista-membresias.component';

describe('ListaMembresiasComponent', () => {
  let component: ListaMembresiasComponent;
  let fixture: ComponentFixture<ListaMembresiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMembresiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMembresiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
