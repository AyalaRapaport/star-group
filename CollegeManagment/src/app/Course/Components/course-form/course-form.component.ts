import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  course = {
    name: '',
    description: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Course submitted', this.course);
    this.router.navigateByUrl('/courses');
  }
}
