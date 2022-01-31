import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-details-restaurants',
  templateUrl: './details-restaurants.component.html',
  styleUrls: ['./details-restaurants.component.scss']
})
export class DetailsRestaurantsComponent implements OnInit {

  restaurant!: any;

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService) { 
    
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.restaurantService.showRestaurant(id).subscribe({
      next: (restaurant)=>{
        this.restaurant = restaurant
       console.log(restaurant);
       
      }
    })
      
  }

}
