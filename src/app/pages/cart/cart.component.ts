import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(courseId: number) {
    this.cartService.removeFromCart(courseId);
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(courseId: number) {
    this.cartService.increaseQuantity(courseId);
    this.cartItems = this.cartService.getCartItems();
  }

  decreaseQuantity(courseId: number) {
    this.cartService.decreaseQuantity(courseId);
    this.cartItems = this.cartService.getCartItems();
  }

  getTotalAmount(): number {
    let totalAmount = 0;
    for (const item of this.cartItems) {
      totalAmount += item.price * item.quantity;
    }

    return totalAmount;
  }
}
