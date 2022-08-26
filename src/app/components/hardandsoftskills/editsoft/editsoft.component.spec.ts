import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsoftComponent } from './editsoft.component';

describe('EditsoftComponent', () => {
  let component: EditsoftComponent;
  let fixture: ComponentFixture<EditsoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
