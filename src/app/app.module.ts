import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MenusComponent } from './pages/home/menus/menus.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/home/about-us/about-us.component';
import { OurCoffeeComponent } from './pages/home/our-coffee/our-coffee.component';
import { ArtistsComponent } from './pages/home/artists/artists.component';
import { ReviewsComponent } from './pages/home/menus/reviews/reviews.component';
import { AddReviewComponent } from './pages/home/menus/reviews/add-review/add-review.component';
import { FormsModule } from '@angular/forms';
import { TableFilterPipe } from './pages/home/artists/table-filter.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenusComponent,
    AboutUsComponent,
    OurCoffeeComponent,
    ArtistsComponent,
    ReviewsComponent,
    AddReviewComponent,
    TableFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
