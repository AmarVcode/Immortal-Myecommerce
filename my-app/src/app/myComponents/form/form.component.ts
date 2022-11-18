import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  

  signIn= new FormGroup({
    user:new FormControl(),
    userMiddle:new FormControl(),
    userLast:new FormControl()
  })

  signInUser(){
    console.log(this.signIn.value.user)
    if(this.signIn.value.user !== null){
      localStorage.setItem("userName",this.signIn.value.user)
      window.location.reload()
    }
    else{
      confirm("Fill The Below Form")
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
