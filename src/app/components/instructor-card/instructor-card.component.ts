import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instructor-card',
  standalone: true,
  imports: [],
  templateUrl: './instructor-card.component.html',
  styleUrl: './instructor-card.component.css',
})
export class InstructorCardComponent {
  @Input() imageUrl: string = '';
  @Input() ratings: number = 0;
  @Input() studentsCount: number = 0;
  @Input() fullName: string = '';
  @Input() profession: string = '';
}
