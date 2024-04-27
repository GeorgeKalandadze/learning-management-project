import { Component } from '@angular/core';
import { LearningManagementService } from '../../services/learning-management.service';
import { CustomerCardComponent } from '../../components/customer-card/customer-card.component';
import { NgFor } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-single-course',
  standalone: true,
  imports: [CourseCardComponent, CustomerCardComponent, NgFor],
  templateUrl: './single-course.component.html',
  styleUrl: './single-course.component.css',
})
export class SingleCourseComponent {
  comments: any[] = [];
  courses: any[] = [];

  constructor(private learningManagementService: LearningManagementService) {}

  ngOnInit(): void {
    this.comments = this.learningManagementService.getComments();
    this.courses = this.learningManagementService.getCourses();
  }
}
