import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../course-service.service';
import { Courses } from '../../models/courses';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  courseForm!: FormGroup;
  isEdit: boolean = false
  course: Courses | null = null

  constructor(private courseService: CourseService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.courseForm = this.fb.group({
      name: [
        '', [Validators.required, Validators.pattern(/^[a-zA-Zא-ת]{2,}$/)]
      ],
      description: [
        '', [Validators.required, Validators.minLength(2)]
      ]
    });

    this.route.params.subscribe(params => {
      const status = params['status']
      if (status === 'edit') {
        this.isEdit = true;
        this.course = history.state.course;
        this.loadData(this.course);
      }
    })
  }

  loadData(course: Courses | null) {
    if (course) {
      this.courseForm.patchValue({
        name: course?.course_name,
        description: course?.course_description
      })
    }
  }

  get name() {
    return this.courseForm.get('name');
  }

  get description() {
    return this.courseForm.get('description');
  }

  uploadDocuments() {
    this.addCourse().subscribe(course => {
      this.router.navigate(['courses/upload-documents-form', course.course_id])
    })
  }

  addClasses() {
    this.addCourse().subscribe(course => {
      this.router.navigate(['courses/class-form', course.course_id])
    })
  }

  addCourse() {
    const course: Courses = this.courseForm.value;
    return this.courseService.addCourse(course);
  }

  onSubmit() {
    this.addCourse().subscribe(course =>
      this.router.navigate(['courses/class-form', course.course_id])
    )
  }


}
