import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';
import { RestaurantsService } from './restaurants.service';
import { RestaurantItemComponent } from './components/restaurant-item/restaurant-item.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantMenuComponent } from './restaurant-detail/restaurant-menu/restaurant-menu.component';
import { RestaurantMenuItemComponent } from './restaurant-detail/restaurant-menu/restaurant-menu-item/restaurant-menu-item.component';
import { RestaurantShoppingCartComponent } from './restaurant-detail/restaurant-menu/restaurant-shopping-cart/restaurant-shopping-cart.component';
import { RestaurantReviewsComponent } from './restaurant-detail/restaurant-reviews/restaurant-reviews.component';


@NgModule({
  declarations: [
    RestaurantsComponent,
    RestaurantItemComponent,
    RestaurantDetailComponent,
    RestaurantMenuComponent,
    RestaurantMenuItemComponent,
    RestaurantShoppingCartComponent,
    RestaurantReviewsComponent
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule
  ],
  providers: [
    RestaurantsService
  ]
})
export class RestaurantsModule { }
