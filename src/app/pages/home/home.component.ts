import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/interface/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() page!: string;
  restaurants!: Restaurant[]

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getListRestaurants().subscribe((res: Restaurant[]) => {;
      this.restaurants = res; 
    })
  }

}
