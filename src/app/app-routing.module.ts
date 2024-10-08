import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursListComponent } from './cours-list/cours-list.component';

const routes: Routes = [
  {path: '', component: CoursListComponent},
  {path: 'cours', component: CourseDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
