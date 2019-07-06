import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCalComponent } from './match-cal.component';

describe('MatchCalComponent', () => {
  let component: MatchCalComponent;
  let fixture: ComponentFixture<MatchCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
