import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestMandalaComponent } from './forest-mandala.component';

describe('ForestMandalaComponent', () => {
  let component: ForestMandalaComponent;
  let fixture: ComponentFixture<ForestMandalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForestMandalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestMandalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
