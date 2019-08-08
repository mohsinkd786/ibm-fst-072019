import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EditComponent } from './edit/edit.component';
import { QueryparamComponent } from './queryparam/queryparam.component';
import { ProjectModule } from './project/project.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomeComponent,
    UsersComponent,
    TopmenuComponent,
    NotfoundComponent,
    EditComponent,
    QueryparamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
