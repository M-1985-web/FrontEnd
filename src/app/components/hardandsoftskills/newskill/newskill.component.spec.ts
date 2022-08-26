import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewskillComponent } from './newskill.component';

describe('NewskillComponent', () => {
  let component: NewskillComponent;
  let fixture: ComponentFixture<NewskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
