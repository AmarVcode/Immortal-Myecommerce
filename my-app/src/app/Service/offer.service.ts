import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor() { }
  Offer(){
    return [
      {
          mini_title: "EXZON Full Set Budget Gaming Pc ",
          main_title: "EXZON Full Set Budget Gaming Pc Desktop Intel Core I7 3770 |Ram 8GB |HDD 1TB 7200 RPM |SSD 256GB |Windows 10 Graphics Card 4GB GT 730 with 20 inches led Monitor RGB Keyboard RGB Mouse Wi-fi ",
          brand: "EXZON",
          price: 34000,
          delivery: "Free",
          typeOfProduct: "Gaming",
          about: [
            "Core i7 3rd Gen 3.40GHz Up to 3.90GHz 4Core 8 Threats 8Mb Caches ",
            "H61 Motherboard VGA & HDMI 3.0 USB Supported ",
            "DDR3 8GB 1600MHz |1 TB 7200RPM Hard Disk | 256GB SSD ",
            "20 inch Monitor VGA & HDMI has an aspect ratio of 16:9 and with 1600 x 900 pixels | GAMING Keyboard Mouse WiFi Adopter ",
            "GT 730 DDR5 4GB Graphic card | windows 10 Pro (trail) essential software ready to play "
          ],
          main_img: "https://m.media-amazon.com/images/I/4137+Oh66oL._SX450_.jpg",
          sub_img: [
            "https://m.media-amazon.com/images/I/4137+Oh66oL._SX450_.jpg",
            "https://m.media-amazon.com/images/I/51HyEjl4xmL._SL1341_.jpg",
            "https://m.media-amazon.com/images/I/51ZyMf6vU3L._SL1293_.jpg",
            "https://m.media-amazon.com/images/I/61Tr0UEo0AL._SL1500_.jpg"
          ]
      }
    ]


    
  }
}
