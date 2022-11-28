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
  window.location.reload()
}




  //fixed Function Image Zoom
  fixed(src: any) {
    console.log("working")
    console.log(src)
    let div = document.getElementById("fixed")
    div?.setAttribute("class", "fixed2")
    let img = document.getElementById("zoomed")
    img?.setAttribute("src", src)
  }


  //removing function for nmoveing class from dom reverse of fixed
  removefixed() {
    let div = document.getElementById("fixed")
    div?.classList.remove("fixed2")
  }



   //Detail Function --------------------------
   detail(items: any) {
    items = JSON.stringify(items)
    localStorage.setItem("detail", items)
    location.pathname = "productdetail"
  }



  ngOnInit(): void {
  }

}
