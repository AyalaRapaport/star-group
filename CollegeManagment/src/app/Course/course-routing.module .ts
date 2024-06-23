import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './Components/courses/courses.component';
import { CourseDetailsComponent } from './Components/course-details/course-details.component';
import { CourseDocumentsComponent } from './Components/course-documents/course-documents.component';
import { ScheduleCourseComponent } from './Components/schedule-course/schedule-course.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: ':id', component: CourseDetailsComponent },
  { path: 'documents/:id', component: CourseDocumentsComponent }, 
  { path: 'schedule/:id', component: ScheduleCourseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
