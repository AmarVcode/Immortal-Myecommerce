import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { FooterComponent } from './myComponents/footer/footer.component';
import { HomeComponent } from './myComponents/home/home.component';
import { FormComponent } from './myComponents/form/form.component';
import { ProductsComponent } from './myComponents/products/products.component';
import { FavoritesComponent } from './myComponents/favorites/favorites.component';
import { ProductdetailComponent } from './myComponents/productdetail/productdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FormComponent,
    ProductsComponent,
    FavoritesComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
