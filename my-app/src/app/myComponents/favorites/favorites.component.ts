import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

array:any=localStorage.getItem("favourite") || []

  constructor() { 
console.log(this.array)


localStorage.setItem("favourite",this.array)
  }











  ngOnInit(): void {
  }

}
