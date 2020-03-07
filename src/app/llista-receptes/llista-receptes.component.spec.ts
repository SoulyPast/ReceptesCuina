import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaReceptesComponent } from './llista-receptes.component';

describe('LlistaReceptesComponent', () => {
  let component: LlistaReceptesComponent;
  let fixture: ComponentFixture<LlistaReceptesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlistaReceptesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaReceptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
