import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsKey = 'cartItems';
  private cartItems: any[] = [];

  constructor() {
    const storedCartItems = sessionStorage.getItem(this.cartItemsKey);
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }
  }

  addToCart(course: any) {
    const existingItemIndex = this.cartItems.findIndex(
      (item) => item.id === course.id
    );
    if (existingItemIndex !== -1) {
      return;
    }
    course.quantity = 1;
    this.cartItems.push(course);
    this.saveCartItemsToStorage();
  }

  removeFromCart(courseId: number) {
    const index = this.cartItems.findIndex((item) => item.id === courseId);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.saveCartItemsToStorage();
    }
  }

  increaseQuantity(courseId: number) {
    const item = this.cartItems.find((item) => item.id === courseId);
    if (item) {
      item.quantity++;
      this.saveCartItemsToStorage();
    }
  }

  decreaseQuantity(courseId: number) {
    const itemIndex = this.cartItems.findIndex((item) => item.id === courseId);
    if (itemIndex !== -1) {
      if (this.cartItems[itemIndex].quantity > 1) {
        this.cartItems[itemIndex].quantity--;
      } else {
        this.cartItems.splice(itemIndex, 1);
      }
      this.saveCartItemsToStorage();
    }
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  getTotalAmount(): number {
    let totalAmount = 0;
    for (const item of this.cartItems) {
      totalAmount += item.price * item.quantity;
    }
    
    return totalAmount;
  }

  private saveCartItemsToStorage() {
    sessionStorage.setItem(this.cartItemsKey, JSON.stringify(this.cartItems));
  }

  
}
