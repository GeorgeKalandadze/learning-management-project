import { Component } from '@angular/core';
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { InstructorCardComponent } from '../../components/instructor-card/instructor-card.component';
import { CustomerCardComponent } from '../../components/customer-card/customer-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryCardComponent, CourseCardComponent, InstructorCardComponent, CustomerCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
