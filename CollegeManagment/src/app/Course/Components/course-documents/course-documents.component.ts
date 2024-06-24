import { Component, Input, OnInit } from '@angular/core';
import { CourseDocument } from '../../models/courseDocument';
import { CourseService } from '../../course-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from '../../models/courses';

@Component({
  selector: 'app-course-documents',
  templateUrl: './course-documents.component.html',
  styleUrls: ['./course-documents.component.css']
})
export class CourseDocumentsComponent implements OnInit {
  documents: CourseDocument[] = [
    new CourseDocument('1', '1', 'Document 1', 'webp', 'https://www.10dakot.co.il/wp-content/uploads/2024/04/%E2%80%8F%E2%80%8FDSC_0149-%D7%A2%D7%95%D7%AA%D7%A7-420x279.jpg.webp', new Date('2023-01-01')),
    new CourseDocument('2', '1', 'Document 2', 'docx', 'http://example.com/doc2.docx', new Date('2023-02-01')),
    new CourseDocument('3', '2', 'Document 3', 'pptx', 'http://example.com/doc3.pptx', new Date('2023-03-01'))
  ];

  course: Courses | null = null;
  filteredDocuments: CourseDocument[] = []

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const course_id = params['id']
      this.filteredDocuments = this.documents.filter(doc => doc.course_id === course_id);
    })
    this.course = history.state.course;
    // this.courseService.getDocumentsByCourseId(this.course_id).subscribe(x => this.documents = x)
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

}
