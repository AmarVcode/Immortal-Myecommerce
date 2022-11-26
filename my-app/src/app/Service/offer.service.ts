import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor() { }
  Offer() {
    return [
      {
        mini_title: "EXZON Full Set Budget Gaming Pc ",
        main_title: "EXZON Full Set Budget Gaming Pc Desktop Intel Core I7 3770 |Ram 8GB |HDD 1TB 7200 RPM |SSD 256GB |Windows 10 Graphics Card 4GB GT 730 with 20 inches led Monitor RGB Keyboard RGB Mouse Wi-fi ",
        brand: "EXZON",
        price: 34000,
        delivery: "Free",
        typeOfProduct: "Gaming",
        src: "https://www.amazon.in/EXZON-Desktop-Windows-Graphics-Keyboard/dp/B0BCX4WL8X/ref=sr_1_1?crid=HFDW73GDCMLD&keywords=EXZON+Full+Set+Budget+Gaming+Pc&qid=1669394294&qu=eyJxc2MiOiIxLjk2IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=exon+gaming%2Caps%2C1338&sr=8-1",
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
      },
      {
        mini_title: "MICSONIC Full Set Budget Gaming Pc",
        main_title: "MICSONIC Full Set Budget Gaming Pc Desktop Intel Core I5 Ram 8GB HDD 500GB 7200 RPM SSD, Windows 10 120GB Graphics Card 2GB GT710 with 19 inches led Monitor RGB Keyboard RGB Mouse Wi-fi (Black)",
        brand: "MICSONIC",
        price: 28500,
        delivery: "Free",
        typeOfProduct: "Gaming",
        src: "https://www.amazon.in/MICSONIC-Desktop-Windows-Graphics-Keyboard/dp/B09JN168FY/ref=sr_1_1?crid=29Y0DJ513MMUM&keywords=full+gaming+set&qid=1669394409&qu=eyJxc2MiOiIzLjA5IiwicXNhIjoiMi4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=%2Caps%2C1379&sr=8-1",
        about: [
          "Intel Core i5 3rd Gen Processor with Base Frequency 2.9GHz, Max Turbo 3.2GHz, 4Cores, 4 Threads, 4MB Smart-cache ",
          "H61 Motherboard VGA& HDMI, 8x 2.0 USB Ports ",
          "8GB DDR3 Ram | 2GB GT 710 Graphic Card",
          "500gb HARD DISK 7200 RPM | SSD 120GB | WIFI Adapter Windows 10 Trail Version"
        ],
        main_img: "https://m.media-amazon.com/images/I/71HeLhm-7FL._SL1448_.jpg",
        sub_img: [
          "https://m.media-amazon.com/images/I/71LeSGictQL._SL1013_.jpg",
          "https://m.media-amazon.com/images/I/31he3zEOyFL._AA50_.jpg"
        ]
      }
    ]



  }
}
