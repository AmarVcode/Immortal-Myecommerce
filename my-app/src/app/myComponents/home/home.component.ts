
import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/Service/offer.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title = "Value For Money!";
  offer: any = [];


  //fetching Data From Service
  constructor(private offerdate: OfferService) {

    this.offer = offerdate.Offer()
    console.log(this.offer)
  }





  //Detail Function --------------------------
  detail(items: any) {
    items = JSON.stringify(items)
    localStorage.setItem("detail", items)
  }







  //addfav function for adding favourites -------------
  
  bool:any=true;
  addfav(items: any) {
    let store: any = localStorage.getItem("fav") || [];
    if (store.length === 0) {
      store.push(items);
      console.log("added");
    }
    else{
      store=JSON.parse(store);
      store.map((element:any)=>{
        if(element.brand===items.brand){
          this.bool=false;
        }
      });

console.log(this.bool);
    
    if(this.bool===true){
      store.push(items);
    }
    else{
      console.log("already Exist Items");
    }

    }
    

    store = JSON.stringify(store);
    localStorage.setItem("fav", store);
  }



  scroll(){
    window.scroll(0,0)
  }
  ngOnInit(): void {

  }
}
