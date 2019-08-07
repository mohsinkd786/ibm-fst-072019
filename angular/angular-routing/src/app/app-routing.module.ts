import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {
    path: "home",
    component : HomeComponent 
  },
  {
    path: 'aboutus',
    component : AboutusComponent
  },
  {
    path: 'users/:id',
    component: UsersComponent
  },
  {
    path : 'edit/:id',
    component : EditComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
