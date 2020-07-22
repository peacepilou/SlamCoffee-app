import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReviewsComponent } from './pages/home/menus/reviews/reviews.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reviews/:id', component: ReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
