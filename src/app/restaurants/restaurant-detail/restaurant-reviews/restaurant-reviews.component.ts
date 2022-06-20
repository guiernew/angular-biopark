import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantsService } from '../../restaurants.service';

@Component({
  selector: 'app-restaurant-reviews',
  templateUrl: './restaurant-reviews.component.html',
  styles: [
  ]
})
export class RestaurantReviewsComponent implements OnInit {

  reviews!: Observable<any>;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.reviews = this.restaurantsService
      .reviewsOfRestaurant(this.route.parent?.snapshot.params['id']);
  }
}
