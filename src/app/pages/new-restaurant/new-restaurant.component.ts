import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Restaurant } from 'src/app/interface/restaurant';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.scss']
})
export class NewRestaurantComponent implements OnInit {

  panelOpenState = false;
  success: boolean = false;
  error: boolean = false;
  restaurantName!: FormControl;
  restaurantType!: FormControl;
  restaurantCity!: FormControl;
  restaurantDescriptif!: FormControl;
  restaurantPrice!: FormControl;
  restaurantImage1!: FormControl;
  restaurantImage2!: FormControl;
  restaurantImage3!: FormControl;
  restaurantForm!: FormGroup;

  constructor(private restaurantService: RestaurantService) { 
    this.restaurantForm = new FormGroup({
      restaurantName: new FormControl(),
      restaurantType: new FormControl(),
      restaurantCity: new FormControl(),
      restaurantDescriptif: new FormControl(),
      restaurantPrice: new FormControl(),
      restaurantImage1: new FormControl(),
      restaurantImage2: new FormControl(),
      restaurantImage3: new FormControl(),

    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    const body: Restaurant = {
      name: this.restaurantForm.value.restaurantName,
      type_cuisine: this.restaurantForm.value.restaurantType,
      descriptif: this.restaurantForm.value.restaurantDescriptif,
      city: this.restaurantForm.value.restaurantCity,
      range_price: this.restaurantForm.value.restaurantPrice,
      image1: this.restaurantForm.value.restaurantImage1,
      image2: this.restaurantForm.value.restaurantImage2,
      image3: this.restaurantForm.value.restaurantImage3,
      note: '',
      comments: ''
    }
    this.restaurantService.postRestaurant(body).subscribe(
      (data)=>{
        this.success = true;
       
      },
      (error)=>{
        this.error = true;
      }
    );
  }

}
