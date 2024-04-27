import { Component } from '@angular/core';
import { LearningManagementService } from '../../services/learning-management.service';
import { CustomerCardComponent } from '../../components/customer-card/customer-card.component';
import { NgFor } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { ActivatedRoute } from '@angular/router';

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
  courseId: number = 0;
  course: any;

  constructor(
    private learningManagementService: LearningManagementService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.comments = this.learningManagementService.getComments();
    this.courses = this.learningManagementService.getCourses();

    this.route.params.subscribe((params) => {
      this.courseId = +params['id'];
      this.loadCourseDetails();
    });

    console.log(this.course);
    
  }

  loadCourseDetails(): void {
    this.course = this.learningManagementService.getCourseById(this.courseId);
  }
  
  
}
