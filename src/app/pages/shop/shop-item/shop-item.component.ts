import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';
import { ShopService } from '../../../shared/index';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/do'; 

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {

  constructor(private shopService: ShopService, private route: ActivatedRoute) { }

  @Input() name: string;

  @Input() activeCategory: string = "";

  allItems: any;

  activeItems: any;

  product: any;

  productActive: boolean = false;

  activeImageUrl: string;

  ngOnInit() {

    this.shopService.getItems().subscribe(data => 
      
      this.findItem(data)
      
    )
  
  }

  findItem(data: any){

    this.allItems = JSON.parse(JSON.stringify(data))
    
    this.activeCategory = this.route.snapshot.data['activeCategory'];

    this.activeItems = this.allItems[this.activeCategory];

    var i;
    for( i=0; i < this.activeItems.length; i++){
      if(this.activeItems[i].name == this.name){
        this.product = this.activeItems[i];
        this.activeImageUrl = this.product.mainImageUrl;
      }
    }

  }
    
  active(){
    if(!this.productActive)
      this.productActive = true;
    else
      this.productActive = false;
  }

  switchMainImageUrl(url: string){

    this.activeImageUrl = url;

  }

}