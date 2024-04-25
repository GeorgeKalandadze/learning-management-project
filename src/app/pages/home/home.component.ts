import { Component } from '@angular/core';
import { CategoryCardComponent } from '../../category-card/category-card.component';
import { CourseCardComponent } from '../../course-card/course-card.component';
import { InstructorCardComponent } from '../../instructor-card/instructor-card.component';
import { CustomerCardComponent } from '../../customer-card/customer-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryCardComponent, CourseCardComponent, InstructorCardComponent, CustomerCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
