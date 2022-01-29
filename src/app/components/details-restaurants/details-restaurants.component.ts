import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/interface/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-details-restaurants',
  templateUrl: './details-restaurants.component.html',
  styleUrls: ['./details-restaurants.component.scss']
})
export class DetailsRestaurantsComponent implements OnInit {

  restaurant!: Restaurant;

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService) { 
    
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.restaurantService.showRestaurant(id).subscribe((res: Restaurant) => {
      this.restaurant = res
    })
      
  }
}
