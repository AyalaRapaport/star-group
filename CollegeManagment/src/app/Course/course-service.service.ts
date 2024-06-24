import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Courses } from './models/courses';
import { CourseDocument } from './models/courseDocument';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursestUrl = `${environment.apiURL}/courses/`;

  constructor(private http: HttpClient) { }

  getAllCourses() {
    return this.http.get<Courses[]>(this.coursestUrl)
  }

  getDocumentsByCourseId(id: string): Observable<CourseDocument[]> {
    return this.http.get<CourseDocument[]>(this.coursestUrl)
  }

  addCourse(course: Courses): Observable<Courses> {
    return this.http.post<Courses>(this.coursestUrl, course)
  }

  addDocuments(documents: CourseDocument[]): Observable<CourseDocument[]> {
    return this.http.post<CourseDocument[]>(this.coursestUrl, documents)
  }

  deleteCourse(id: string | undefined) {
    return this.http.delete(this.coursestUrl + id)
  }
}
