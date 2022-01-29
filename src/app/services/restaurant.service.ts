import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { baseUrl } from '../constants/base-api'
import { Restaurant } from '../interface/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getListRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${baseUrl}/restaurants/`)
  }

  showRestaurant(id: number) {
    return this.http.get<Restaurant>(`${baseUrl}/restaurants/${id}`)
  }
  
  postRestaurant(restaurant: Restaurant):Observable<Restaurant>{
    return this.http.post<Restaurant>(`${baseUrl}/restaurants/`, restaurant);
  }

  deleteRestaurant(id: number){
    return this.http.delete(`${baseUrl}/restaurants/${id}`);
  }

  updateRestaurant(restaurant: Restaurant, id: number):Observable<Restaurant>{
    return this.http.put<Restaurant>(`${baseUrl}/restaurants/${id}`, restaurant);
  }
}
