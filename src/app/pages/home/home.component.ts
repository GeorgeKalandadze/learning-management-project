import { Component } from '@angular/core';
import { CategoryCardComponent } from '../../category-card/category-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
