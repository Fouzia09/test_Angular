import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRestaurantsComponent } from './components/list-restaurants/list-restaurants.component';
import { DetailsRestaurantsComponent } from './components/details-restaurants/details-restaurants.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NewRestaurantComponent } from './pages/new-restaurant/new-restaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    ListRestaurantsComponent,
    DetailsRestaurantsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    DatepickerComponent,
    CarouselComponent,
    NewRestaurantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
