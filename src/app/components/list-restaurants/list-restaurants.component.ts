import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/interface/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.scss']
})
export class ListRestaurantsComponent implements OnInit {

  @Input() page!: string;
  restaurants!: Restaurant[]

  constructor( private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getListRestaurants().subscribe((res: Restaurant[]) => {;
      this.restaurants = res; 
    })
    
  }

}
