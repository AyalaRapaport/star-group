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

  getAllCourses(){
    return this.http.get<Courses[]>(this.coursestUrl)
  }
  
  getDocumentsByCourseId(id: string): Observable<CourseDocument[]> {
    return this.http.get<CourseDocument[]>(this.coursestUrl)
  }
}
