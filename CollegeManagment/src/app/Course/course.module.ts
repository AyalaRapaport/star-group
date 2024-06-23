import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseDocumentsComponent } from './Components/course-documents/course-documents.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { CourseDetailsComponent } from './Components/course-details/course-details.component';
import { ScheduleCourseComponent } from './Components/schedule-course/schedule-course.component';
import { MatIconModule } from '@angular/material/icon';
import { CourseDocument } from './models/courseDocument';
import { CourseRoutingModule } from './course-routing.module ';
import { CourseFormComponent } from './Componemts/course-form/course-form.component';
import { UploadDocumentsFormComponent } from './Components/upload-documents-form/upload-documents-form.component';
import { ClassFormComponent } from './Components/class-form/class-form.component';

@NgModule({
  declarations: [
    CourseDetailsComponent,
    CoursesComponent,
    CourseDocumentsComponent,
    ScheduleCourseComponent,
    CourseFormComponent,
    UploadDocumentsFormComponent,
    ClassFormComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    CourseRoutingModule
  ],
  exports: [
    CourseDetailsComponent,
    CoursesComponent,
    CourseDocumentsComponent,
    ScheduleCourseComponent
  ],

})
export class CourseModule { }