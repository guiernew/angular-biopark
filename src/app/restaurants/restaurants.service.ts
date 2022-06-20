import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class RestaurantsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  restaurants(search?: string): Observable<any> {
    const params = new HttpParams();
    if (search) {
      params.set('q', search);
    }
    return this.httpClient.get(`${environment.apiUrl}/restaurants`, { params });
  }

  restaurantById(id: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/restaurants/${id}`);
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/restaurants/${id}/reviews`);
  }

  menuOfRestaurant(id: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/restaurants/${id}/menu`);
  }
}
