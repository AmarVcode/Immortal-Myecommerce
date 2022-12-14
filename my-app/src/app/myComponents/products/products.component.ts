import { Component, OnInit } from '@angular/core';
import { AllproductService } from 'src/app/Service/allproduct.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
public title="All Products"

  offer: any = [];


  //fetching Data From Service
  constructor(private offerdate: AllproductService) {

    this.offer = offerdate.Product()
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

  newproduct:any=[]

search(){
  let txt:any=document.getElementById("searchbar");
  txt=txt.value;
  txt=txt.toLowerCase();
  this.newproduct=[]
  
  this.offer.map((elem:any)=>{
    if(elem.main_title.toLowerCase().includes(txt)){
      this.newproduct.push(elem)
    }
  })
  console.log(this.newproduct)
  console.log(txt)
}
  

low(){
  this.offer.sort((a:any,b:any)=>{
a=a.price;
b=b.price;
return a>b
  })

  this.newproduct.sort((a:any,b:any)=>{
    a=a.price;
    b=b.price;
    return a>b
      })
}


high(){
  this.offer.sort((a:any,b:any)=>{
a=a.price;
b=b.price;
return b>a
  })

  this.newproduct.sort((a:any,b:any)=>{
    a=a.price;
    b=b.price;
    return b>a
      })
}

scroll(){
  window.scroll(0,0)
}

public boolimg:boolean=false

fixedimg(src:any){
  if(this.boolimg===false){
    this.boolimg=true
    document.getElementById("fixeddiv")?.classList.add("fixed")
    document.getElementById("myimg")?.setAttribute("src",src)
  }
  else{
    this.boolimg=false
    document.getElementById("fixeddiv")?.classList.remove("fixed")

  }
}

  ngOnInit(): void {
  }

}
