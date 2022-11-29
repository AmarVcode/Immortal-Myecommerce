import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  product:any= localStorage.getItem("detail");
  title:any="";
  mainimg:any="";
  price:any="";
  delivery:any="";
  brand:any="";
  type:any="";
  srcproduct:any="";
  about:any="";
  subimg:any="";

  constructor() { 
    this.product=JSON.parse(this.product);
    this.mainimg=this.product.main_img;
    this.title=this.product.main_title;
    this.price=this.product.price;
    this.delivery=this.product.delivery;
    this.brand=this.product.brand;
    this.type=this.product.typeOfProduct;
    this.srcproduct=this.product.src;
    this.about=this.product.about;
    this.subimg=this.product.sub_img
    console.log(this.product);
    console.log(this.title);
    console.log(this.mainimg);
    console.log(this.price);
    console.log(this.delivery);
    console.log(this.brand);
    console.log(this.type);
    console.log(this.srcproduct);
    console.log(this.about);
    console.log(this.subimg)
  }


  setimg(items:any){
    let div:any=document.getElementById("mainI");
    div.src=items;

  }



   //fixed Function Image Zoom
   fixed() {
    let src:any=document.getElementById("mainI");
    src=src.src;
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

  ngOnInit(): void {
  }

}
