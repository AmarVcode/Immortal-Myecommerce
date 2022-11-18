import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './myComponents/form/form.component';
import { HomeComponent } from './myComponents/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'SignIn', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
