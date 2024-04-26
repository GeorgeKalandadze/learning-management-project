import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-card',
  standalone: true,
  imports: [],
  templateUrl: './customer-card.component.html',
  styleUrl: './customer-card.component.css',
})
export class CustomerCardComponent {
  @Input() imageUrl: string = '';
  @Input() fullName: string = '';
  @Input() profession: string = '';
  @Input() comment: string = '';
}
