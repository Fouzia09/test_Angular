import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsRestaurantsComponent } from './components/details-restaurants/details-restaurants.component';
import { ListRestaurantsComponent } from './components/list-restaurants/list-restaurants.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent 
  },
  { 
    path: 'home', component: HomeComponent 
  },
  { 
    path: 'restaurants/detail/:id', component: DetailsRestaurantsComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
