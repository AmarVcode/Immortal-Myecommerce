
import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/Service/offer.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title = "Value For Money!"
  offer:any=[]

  constructor(private offerdate:OfferService) {
    
    this.offer =offerdate.Offer()
console.log(this.offer)






  }
 
  detail(items:any){
    items=JSON.stringify(items)
localStorage.setItem("detail",items)
location.pathname="productdetail"
  }
  
  fixed(src:any){
    console.log("working")
    console.log(src)
    let div=document.getElementById("fixed")
    div?.setAttribute("class","fixed2")
    let img=document.getElementById("zoomed")
    img?.setAttribute("src",src)

  }



  removefixed(){
    let div=document.getElementById("fixed")
    div?.classList.remove("fixed2")
  }
  
  addfav(items:any){

let store:any=localStorage.getItem("fav")||[]
if(store.length === 0){
  store.push(items)
}
else{
  store=JSON.parse(store)

for(let i=0;i<=store.length;i++){
  if(store[i].mini_title===items.mini_title){
    store.push(items)
  }
  else{
    console.log("product Alredy in favarite")
  }
}
console.log(store)
store=JSON.stringify(store)
localStorage.setItem("fav",store)

}



  }



  ngOnInit(): void {
    
  }

}
