import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';
import { catchError, take } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: any;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.restaurantsService.restaurantById(this.route.snapshot.params.id)
      .pipe(
        take(1),
        catchError(error => {
          if (error.status === 404) {
            this.router.navigate(['/404']);
          }
          return EMPTY;
        })
      )
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
