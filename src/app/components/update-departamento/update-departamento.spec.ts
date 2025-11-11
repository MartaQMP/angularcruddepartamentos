import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDepartamento } from './update-departamento';

describe('UpdateDepartamento', () => {
  let component: UpdateDepartamento;
  let fixture: ComponentFixture<UpdateDepartamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateDepartamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDepartamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
