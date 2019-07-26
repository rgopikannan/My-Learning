import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { Location } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './users/user.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

import { APP_ROUTES } from './app.routing';
describe('AppComponent', () => {

  let location: Location;
  let router: Router;
  let fixture;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule.withRoutes(APP_ROUTES) ],
      declarations: [
        AppComponent,
        HomeComponent,
        UserComponent,
        PostsComponent
      ],
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  it('fakeAsync works', fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to /', fakeAsync(() => {
    router.navigate(['']).then(() => {
      tick();
      expect(location.path()).toBeTruthy();
    });
  }));

  it('navigate to "/users" redirects you to /users', fakeAsync(() => {
    router.navigate(['/users']).then(() => {
      tick();
      expect(location.path()).toBe('/users');
    });
  }));

  /*

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular App');
  });

   it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to hellow-world!');
  }); */
});
