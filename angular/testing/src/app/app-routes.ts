import { Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

export const routes:Routes= [
    {
      path: 'home',
      component: AppComponent
    },
    {
      path : 'user',
      component: UserComponent
    },
    {
      path: '',
      redirectTo : 'home',
      pathMatch : 'full'
    }
  ];