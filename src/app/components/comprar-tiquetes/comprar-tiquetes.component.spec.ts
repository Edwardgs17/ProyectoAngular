import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarTiquetesComponent } from './comprar-tiquetes.component';

describe('ComprarTiquetesComponent', () => {
  let component: ComprarTiquetesComponent;
  let fixture: ComponentFixture<ComprarTiquetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprarTiquetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarTiquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
