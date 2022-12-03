import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  public user = localStorage.getItem("userName")||"Sign In"
  public seedrop = false

  mymenu(){

    let menu=document.getElementById("menus")
    let fix=document.getElementById("fixed")
    if(this.seedrop === false){
      this.seedrop=true
      menu?.classList.add("droptime")
      fix?.classList.add("fixed")
    }
    else{
      this.seedrop=false
      menu?.classList.remove("droptime")
      fix?.classList.remove("fixed")
      
    }


  console.log(this.seedrop,menu)
}
  constructor() { 


  }

  ngOnInit(): void {  

  }

}

