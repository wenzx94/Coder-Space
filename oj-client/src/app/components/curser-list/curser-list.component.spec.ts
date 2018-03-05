import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurserListComponent } from './curser-list.component';

describe('CurserListComponent', () => {
  let component: CurserListComponent;
  let fixture: ComponentFixture<CurserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
