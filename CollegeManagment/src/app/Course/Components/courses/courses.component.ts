import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course-service.service';
import { Courses } from '../../models/courses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Courses[] = []

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.courses = [
      new Courses('1', 'Mathematics', 'An introduction to algebra and calculus.', new Date('2023-01-01'), new Date('2023-01-02')),
      new Courses('2', 'Physics', 'Understanding the fundamental laws of nature.', new Date('2023-01-03'), new Date('2023-01-04')),
      new Courses('3', 'Chemistry', 'Exploring chemical reactions and compounds.', new Date('2023-01-05'), new Date('2023-01-06'))
    ];
    // this.courseService.getAllCourses().subscribe(x => this.courses = x)
  }

  toDocuments(course: Courses) {
    this.router.navigate(['courses/documents', course.course_id], { state: { course: course } });
  }

  toSchedule(course: Courses) {
    this.router.navigateByUrl('courses/schedule/' + course.course_id, { state: { course: course } })
  }


}
