import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from '../user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let uService: UserService
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    // Inject Service in Component
    uService = fixture.debugElement.injector.get(UserService);
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

  it('should return list of users ',fakeAsync(()=>{
    const _users = component.getUsers();
    const _usersFromService = uService.getUsers();
    tick(10);
    expect(_usersFromService).toBe(_users);
  }));
});
