import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  value: string = '';
  @Input() width: string = 'auto';
  onChange(value: string) {}
}
