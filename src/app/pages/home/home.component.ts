import { Component, OnInit } from '@angular/core';
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { InstructorCardComponent } from '../../components/instructor-card/instructor-card.component';
import { CustomerCardComponent } from '../../components/customer-card/customer-card.component';
import { LearningManagementService } from '../../services/learning-management.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CategoryCardComponent,
    CourseCardComponent,
    InstructorCardComponent,
    CustomerCardComponent,
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  comments: any[] = [];
  instructors: any[] = [];
  courses: any[] = [];
  categories: any[] = [];

  constructor(private learningManagementService: LearningManagementService) {}
   ngOnInit(): void {
    this.comments = this.learningManagementService.getComments();
    this.instructors = this.learningManagementService.getInstructors();
    this.courses = this.learningManagementService.getCourses();
    this.categories = this.learningManagementService.getCategories();
  }

}
