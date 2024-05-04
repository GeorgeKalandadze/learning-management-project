import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {}

  addToCart(course: any) {
    const existingItemIndex = this.cartItems.findIndex(
      (item) => item.id === course.id
    );
    if (existingItemIndex !== -1) {
      console.log('Course already exists in the cart.');
      return;
    }
    course.quantity = 1;
    this.cartItems.push(course);
    console.log('Course added to cart:', course);
    console.log('Current cart items:', this.cartItems);
  }

  removeFromCart(courseId: number) {
    const index = this.cartItems.findIndex((item) => item.id === courseId);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  increaseQuantity(courseId: number) {
    const item = this.cartItems.find((item) => item.id === courseId);
    if (item) {
      item.quantity++;
    }
  }

  decreaseQuantity(courseId: number) {
    const item = this.cartItems.find((item) => item.id === courseId);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
  }

  getCartItems(): any[] {
    return this.cartItems;
  }
}
