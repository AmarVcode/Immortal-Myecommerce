import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './myComponents/favorites/favorites.component';
import { FormComponent } from './myComponents/form/form.component';
import { HomeComponent } from './myComponents/home/home.component';
import { ProductsComponent } from './myComponents/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'SignIn', component: FormComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
