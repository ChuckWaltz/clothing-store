import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { JQ_TOKEN, TOASTR_TOKEN, Toastr } from "./common/index";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ShopHomePageComponent } from "./pages/shop/shop-home-page/shop-home-page.component";

import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes/routes";
import { FooterComponent } from "./footer/footer.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";

import { HttpClientModule } from "@angular/common/http";

import { ShopItemComponent } from "./pages/shop/shop-item/shop-item.component";
import { ShopService } from "./shared/index";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ShopHomePageComponent,
    FooterComponent,
    AboutPageComponent,
    ContactPageComponent,
    ShopItemComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule {}
