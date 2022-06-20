import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurants.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: any[] = [];
  loadingRestaurants = true;

  constructor(
    private restaurantsService: RestaurantsService
  ) { }

  ngOnInit(): void {
    this.restaurantsService.restaurants()
      .pipe(take(1))
      .subscribe(restaurants => {
        this.restaurants = restaurants;
        this.loadingRestaurants = false;
      });
  }

}
