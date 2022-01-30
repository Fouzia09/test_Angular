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
  filteredItems!: Restaurant[];
  inputName: string = '';
  listMore!: any;

  constructor( private restaurantService: RestaurantService) {
    this.filteredItems = this.filteredItems;
   }

  ngOnInit(): void {
    this.restaurantService.getListRestaurants().subscribe((res: Restaurant[]) => {;
      this.restaurants = res; 
    })
    
  }
  // Methode qui permet de faire la recherche par nom de restaurant
  filterSearch(){
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

   // Methode qui permet d'afficher la suite des elements'
  showMore() {
    this.listMore = this.restaurants.slice(4)
    console.log(this.listMore)
  }
}
