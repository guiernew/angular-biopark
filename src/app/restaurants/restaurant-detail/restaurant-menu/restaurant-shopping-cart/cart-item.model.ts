export class CartItem {
  constructor(
    public menuItem: any,
    public quantity: number = 1
  ) { }

  value(): number {
    return this.menuItem.price * this.quantity;
  }
}