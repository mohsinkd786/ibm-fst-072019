import { TestBed } from '@angular/core/testing';

import { UserService, User } from './user.service';

describe('UserService', () => {
  let service:UserService;
  beforeEach(() => 
  {
    TestBed.configureTestingModule({})
    service = TestBed.get(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all users',()=>{
    const _usrs = service.getUsers();
    expect(_usrs.length).not.toBeNull();

  });

  it('should add a user',()=>{ 
    const user:User = {
      id: 5,
      name: 'Test'
    }
    service.addUser(user);
    const _usrs = service.getUsers();
    const _userCreated = service.findUserById(user.id);
    expect(_userCreated).toBe(user);

  });
});
