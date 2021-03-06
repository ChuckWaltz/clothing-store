import {
  Component,
  OnInit,
  OnChanges,
  HostListener,
  Inject,
  Input
} from "@angular/core";

import { ShopService } from "../../../shared/index";

import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-shop-home-page",
  templateUrl: "./shop-home-page.component.html",
  styleUrls: ["./shop-home-page.component.css"]
})
export class ShopHomePageComponent implements OnInit {
  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  allItems: any;

  activeItems: any;

  productActive: boolean = false;
  activeProduct: any;

  activeImageUrl: any;

  @Input() activeCategory: string = "";

  ngOnInit() {
    this.shopService.getItems().subscribe(data =>
      // this.allItems = data['items']
      this.findItems(data)
    );
  }

  findItems(data: any) {
    this.allItems = JSON.parse(JSON.stringify(data));

    this.activeCategory = this.route.snapshot.data["activeCategory"];

    this.activeItems = this.allItems[this.activeCategory];
  }

  active(name: any) {
    this.productActive = !this.productActive;

    if (this.productActive) {
      var i;
      for (i = 0; i < this.activeItems.length; i++) {
        if (this.activeItems[i].name == name) {
          this.activeProduct = this.activeItems[i];
          this.activeImageUrl = this.activeItems[i].mainImageUrl;
        }
      }
    }
  }

  switchMainImageUrl(i: any) {
    this.activeImageUrl = i;
  }
}
