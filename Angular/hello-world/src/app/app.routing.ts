import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './users/user.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

export const APP_ROUTES:Routes = [
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
