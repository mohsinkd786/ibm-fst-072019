import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ProjectRoutingModule } from './project-routing.module';


@NgModule({
  declarations: [ListComponent, AddComponent, EditComponent],
  imports: [
    CommonModule
  ]
})
export class ProjectModule { }
