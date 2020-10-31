import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaProComponent } from './consulta-pro.component';

describe('ConsultaProComponent', () => {
  let component: ConsultaProComponent;
  let fixture: ComponentFixture<ConsultaProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
