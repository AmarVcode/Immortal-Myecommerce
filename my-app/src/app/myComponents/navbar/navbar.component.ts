import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  public user = "Sign In"
  public seedrop = false

  mymenu(){

    let menu=document.getElementById("menus")

    if(this.seedrop === false){
      this.seedrop=true
      menu?.classList.add("droptime")
    }
    else{
      this.seedrop=false
      menu?.classList.remove("droptime")

    }


  console.log(this.seedrop,menu)
}
  constructor() { 


  }

  ngOnInit(): void {  

  }

}

