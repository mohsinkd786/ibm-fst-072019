import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return Hello ',()=>{
    const userComp = fixture.debugElement.componentInstance;
    const _msg = "Hello"; 
    const _response = userComp.clickMe();
    expect(_response).toBe(_msg);
  });

  it('should render the span',()=>{
    const _htmlRef = fixture.debugElement.nativeElement;
    const _elemMsg = _htmlRef.querySelector('span').textContent;
    expect(_elemMsg).toBe("msg");
  });
});
