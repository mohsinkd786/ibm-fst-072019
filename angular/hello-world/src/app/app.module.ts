import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmployeesComponent } from './employees/employees.component';
import { PowerPipe } from './power.pipe';
import { SqrootPipe } from './sqroot.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployeesComponent,
    PowerPipe,
    SqrootPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
