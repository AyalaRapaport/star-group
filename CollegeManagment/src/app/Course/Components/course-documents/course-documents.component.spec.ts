import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDocumentsComponent } from './course-documents.component';

describe('CourseDocumentsComponent', () => {
  let component: CourseDocumentsComponent;
  let fixture: ComponentFixture<CourseDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
