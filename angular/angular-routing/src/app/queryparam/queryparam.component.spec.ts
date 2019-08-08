import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryparamComponent } from './queryparam.component';

describe('QueryparamComponent', () => {
  let component: QueryparamComponent;
  let fixture: ComponentFixture<QueryparamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryparamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
