import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproyectComponent } from './editproyect.component';

describe('EditproyectComponent', () => {
  let component: EditproyectComponent;
  let fixture: ComponentFixture<EditproyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproyectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditproyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
