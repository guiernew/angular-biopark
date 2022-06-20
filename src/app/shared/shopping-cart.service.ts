import { Injectable } from '@angular/core';
import { CartItem } from '../restaurants/restaurant-detail/restaurant-menu/restaurant-shopping-cart/cart-item.model';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items: CartItem[] = [];

  constructor(private notificationService: NotificationService) { }

  clear(): void {
    this.items = [];
  }

  addItem(item: any): void {
    const foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
    this.notificationService.notify(`Você adicionou o item ${item.name}`);
  }

  increaseQty(item: any): void {
    item.quantity = item.quantity + 1;
  }

  decreaseQty(item: any): void {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }

  removeItem(item: any): void {
    this.items.splice(this.items.indexOf(item), 1);
    this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`);
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
