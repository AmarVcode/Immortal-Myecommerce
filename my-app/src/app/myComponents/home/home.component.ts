
import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/Service/offer.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title = "Value For Money!"
  offer: any = []



  //fetching Data From Service
  constructor(private offerdate: OfferService) {

    this.offer = offerdate.Offer()
    console.log(this.offer)
  }





  //Detail Function --------------------------
  detail(items: any) {
    items = JSON.stringify(items)
    localStorage.setItem("detail", items)
    location.pathname = "productdetail"
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




  //addfav function for adding favourites -------------
  addfav(items: any) {
    let store: any = localStorage.getItem("fav") || [];
    if (store.length === 0) {
      store.push(items);
      console.log("added");
    }
    else{
      store=JSON.parse(store);
      store.push(items);
      console.log("Adding Done")
    }
  

    store = JSON.stringify(store)
    localStorage.setItem("fav", store)


  }

  ngOnInit(): void {

  }

}
