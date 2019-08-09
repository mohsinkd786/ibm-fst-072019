import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { routes } from './app-routes';

describe('AppComponent', () => {
  let router : Router
  let location: Location
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserComponent
      ],
      imports : [
        RouterTestingModule.withRoutes(routes)
      ]
    }).compileComponents();

    // setup mock objects from test bed
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    router.initialNavigation();

  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testing');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to testing!');
  });

  it('should get redirected to ',fakeAsync( ()=>{
    router.navigate(['']).then(()=>{
      tick(10);
      expect(location.path()).toBe('/home');
    });
  }));
});
