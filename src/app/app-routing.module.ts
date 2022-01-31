import { NewRestaurantComponent } from './pages/new-restaurant/new-restaurant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsRestaurantsComponent } from './components/details-restaurants/details-restaurants.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent 
  },
  { 
    path: 'restaurants/:id', component: DetailsRestaurantsComponent,
    
  },
  { 
    path: 'restaurant/new', component: NewRestaurantComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
