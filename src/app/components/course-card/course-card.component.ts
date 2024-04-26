import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input() starCount: number = 0;
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() author: string = '';
  @Input() ratings: number = 0;
  @Input() totalHours: number = 0;
  @Input() totalLectures: number = 0;
  @Input() level: string = '';
  @Input() price: number = 0;

  get starsArray(): number[] {
    return Array(this.starCount).fill(0);
  }
}
