import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
public title="Your Favorites Are Here"
array:any=localStorage.getItem("fav") || []

  constructor() { 
    if(this.array.length>0){
      this.array=JSON.parse(this.array)
    }
console.log(this.array)
  }

deleted(){

  let empty:any=[]

  localStorage.setItem("fav",empty)
  location.reload()
}







   //Detail Function --------------------------
   detail(items: any) {
    items = JSON.stringify(items)
    localStorage.setItem("detail", items)
  }



  //scrool up functionlity
  scroll(){
    window.scroll(0,0)
  }

  ngOnInit(): void {
  }

}
