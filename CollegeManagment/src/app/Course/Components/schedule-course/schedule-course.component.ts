import { Component, OnInit } from '@angular/core';
import { Classes } from '../../models/classes';
import { ActivatedRoute } from '@angular/router';
import { Courses } from '../../models/courses';

@Component({
  selector: 'app-schedule-course',
  templateUrl: './schedule-course.component.html',
  styleUrls: ['./schedule-course.component.css']
})
export class ScheduleCourseComponent implements OnInit {

  classes: Classes[] = [
    new Classes('1', '1', 'Math 101', 'Introduction to Algebra', new Date('2024-06-20T10:00:00'), new Date('2024-06-20T12:00:00')),
    new Classes('2', '1', 'Math 101', 'Introduction to Algebra', new Date('2024-06-21T11:00:00'), new Date('2024-06-21T13:00:00')),
    new Classes('3', '1', 'Math 101', 'Introduction to Algebra', new Date('2024-06-22T14:00:00'), new Date('2024-06-22T16:00:00')),
    new Classes('4', '2', 'frt', 'Introduction to Algebra', new Date('2024-06-23T14:00:00'), new Date('2024-06-22T16:00:00')),
    new Classes('5', '3', 'gt', 'Introduction to Algebra', new Date('2024-06-25T14:00:00'), new Date('2024-06-22T16:00:00'))
  ];

  filteredClasses: Classes[] = [];
  currentWeekStart: Date = this.getStartOfWeek(new Date());
  hours: number[] = Array.from({ length: 13 }, (_, i) => i + 8); // 8 AM to 8 PM
  daysOfWeek: string[] = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];
  currentWeekDates: Date[] = [];

  constructor(private route: ActivatedRoute) { }
  course: Courses | null = null

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const course_id = params['id']
      this.filteredClasses = this.classes.filter(cls => cls.course_id === course_id);
      // this.courseService.getClassesByCourseId(courseId).subscribe(x => this.filteredClasses = x)
    });
    this.course = history.state.course;

    this.updateCurrentWeekDates();
  }

  getClassesForHourAndDay(hour: number, dayIndex: number): Classes[] {
    const day = new Date(this.currentWeekStart);
    day.setDate(this.currentWeekStart.getDate() + dayIndex);
    return this.filteredClasses.filter(cls => {
      const startHour = new Date(cls.start_date!).getHours();
      const endHour = new Date(cls.end_date!).getHours();
      const classDay = new Date(cls.start_date!).getDay();
      const classDate = new Date(cls.start_date!).toDateString();
      return startHour <= hour && endHour > hour && classDay === dayIndex && classDate === day.toDateString();
    });
  }

  getStartOfWeek(date: Date): Date {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day;
    startOfWeek.setDate(diff);
    startOfWeek.setHours(0, 0, 0, 0);
    return startOfWeek;
  }

  getFormattedDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  updateCurrentWeekDates(): void {
    this.currentWeekDates = this.daysOfWeek.map((_, dayIndex) => {
      const day = new Date(this.currentWeekStart);
      day.setDate(this.currentWeekStart.getDate() + dayIndex);
      return day;
    });
  }

  previousWeek(): void {
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
    this.updateCurrentWeekDates();
  }

  nextWeek(): void {
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() + 7);
    this.updateCurrentWeekDates();
  }
}
