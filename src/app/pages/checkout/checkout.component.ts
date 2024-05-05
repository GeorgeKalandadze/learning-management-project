import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { NgClass, NgFor, NgStyle } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NgStyle, NgClass, NgFor, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  cartItems: any[] = [];
  totalAmount: number = 0;
  checkoutForm: FormGroup = new FormGroup({});
  formSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.initForm();
  }

  initForm(): void {
    this.checkoutForm = this.formBuilder.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      cardName: ['', Validators.required],
      cardNumber: ['', [Validators.required, this.validateCardNumber]],
      expiryDate: ['', [Validators.required]],
      cvc: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      paymentMethod: ['', Validators.required],
    });
  }

  validateCardNumber(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const cardNumber = control.value.replace(/\D/g, '');
    let sum = 0;
    let isEven = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i), 10);
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      isEven = !isEven;
    }
    if (sum % 10 !== 0) {
      return { invalidCardNumber: true };
    }
    return null;
  }

  // validateExpiryDate(
  //   control: AbstractControl
  // ): { [key: string]: boolean } | null {
  //   const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{4}$/;
  //   if (!expiryDateRegex.test(control.value)) {
  //     return { invalidExpiryDate: true };
  //   }
  //   const currentDate = new Date();
  //   const [month, year] = control.value.split('/');
  //   const expiryDate = new Date(parseInt(year), parseInt(month) - 1, 1);
  //   if (expiryDate < currentDate) {
  //     return { invalidExpiryDate: true };
  //   }
  //   return null;
  // }

  getTotalAmount(): number {
    let totalAmount = 0;
    for (const item of this.cartItems) {
      totalAmount += item.price * item.quantity;
    }

    return totalAmount;
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.checkoutForm.valid) {
      this.router.navigateByUrl('/order-complete');
    } else {
      console.log('Form is invalid. Please fix errors before proceeding.');
    }
  }
}
