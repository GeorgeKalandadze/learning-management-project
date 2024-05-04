import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
