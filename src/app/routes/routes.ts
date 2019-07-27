import { Routes } from "@angular/router";

import { ShopHomePageComponent } from "../pages/shop/shop-home-page/shop-home-page.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { ContactPageComponent } from "../pages/contact-page/contact-page.component";

export const appRoutes: Routes = [
  {
    path: "shop",
    component: ShopHomePageComponent,
    data: { activeCategory: "featured collection" }
  },
  {
    path: "shop/featured",
    component: ShopHomePageComponent,
    data: { activeCategory: "featured collection" }
  },
  {
    path: "shop/dresses",
    component: ShopHomePageComponent,
    data: { activeCategory: "dresses" }
  },
  {
    path: "shop/professional",
    component: ShopHomePageComponent,
    data: { activeCategory: "professional" }
  },
  {
    path: "shop/summer",
    component: ShopHomePageComponent,
    data: { activeCategory: "summer" }
  },
  {
    path: "shop/winter",
    component: ShopHomePageComponent,
    data: { activeCategory: "winter" }
  },
  {
    path: "shop/intimates",
    component: ShopHomePageComponent,
    data: { activeCategory: "intimates" }
  },
  {
    path: "shop/accessories",
    component: ShopHomePageComponent,
    data: { activeCategory: "accessories" }
  },
  { path: "about", component: AboutPageComponent },
  { path: "contact", component: ContactPageComponent },
  //{ path: '404', component: Error404Component },
  { path: "home", component: HomePageComponent },
  { path: "", component: HomePageComponent, pathMatch: "full" }
];
