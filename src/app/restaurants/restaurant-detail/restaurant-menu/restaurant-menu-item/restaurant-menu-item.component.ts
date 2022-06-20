import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-restaurant-menu-item',
  templateUrl: './restaurant-menu-item.component.html',
  styles: [
  ],
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class RestaurantMenuItemComponent implements OnInit {

  menuItemState = 'ready';

  @Input() menuItem: any;
  @Output() add = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  emitAddEvent(): void {
    this.add.emit(this.menuItem);
  }

}
