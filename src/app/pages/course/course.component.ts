import { NgIf, NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LearningManagementService } from '../../services/learning-management.service';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { InstructorCardComponent } from '../../components/instructor-card/instructor-card.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [NgIf, NgClass, CourseCardComponent, NgFor, InstructorCardComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  dropdowns: { [key: string]: boolean } = {};
  courses: any[] = [];
  instructors: any[] = [];

  constructor(private learningManagementService: LearningManagementService) {}

  toggleDropdown(dropdownId: string) {
    this.dropdowns[dropdownId] = !this.dropdowns[dropdownId];
  }

  ngOnInit(): void {
    this.courses = this.learningManagementService.getCourses();
    this.instructors = this.learningManagementService.getInstructors();
  }
}
