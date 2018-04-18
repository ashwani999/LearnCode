import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompiComponent } from './compi.component';

describe('CompiComponent', () => {
  let component: CompiComponent;
  let fixture: ComponentFixture<CompiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
