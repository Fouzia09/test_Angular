import { RestaurantService } from './../../services/restaurant.service';
import { Restaurant } from 'src/app/interface/restaurant';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() page!: string;
  restaurants!: Restaurant[];
  filteredItems!: Restaurant[];
  inputName: string = '';

  constructor( private restaurantService: RestaurantService) {
    this.restaurants=this.restaurants
    this.filteredItems = this.filteredItems;
   }

  ngOnInit(): void {
    this.restaurantService.getListRestaurants().subscribe((res: Restaurant[]) => {;
      this.restaurants = res; 
    })
  }

  Filter(){
    this.filteredItems = [];
    if(this.inputName != ""){
          this.restaurants.forEach(element => {
              if(element.name.toUpperCase().indexOf(this.inputName.toUpperCase())>=0 ) {
                this.filteredItems.push(element);
                this.restaurants=this.filteredItems
             }
          });
    }else{
       this.filteredItems = this.restaurants;
    }
  }

}
