
import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/Service/offer.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title = "Value For Money!"
  offer:any=""

  constructor(private offerdate:OfferService) {
    
    this.offer =offerdate.Offer()

  }
 
  
  
  
  ngOnInit(): void {
    
  }

}
