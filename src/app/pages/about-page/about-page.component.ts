import { Component, Inject, OnInit, OnChanges, HostListener } from '@angular/core';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr} from '../../common/index';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(@Inject(JQ_TOKEN) private $: any, @Inject(TOASTR_TOKEN) private toastr: Toastr | Toastr) {} //The '| Toastr' is a band-aid to a bug that throws an error in the console
  
    ngOnInit() {
  
      this.$(".fill-screen").css("height", window.innerHeight); //Sets the height initially
      this.$(".fill-screen-left").css("height", window.innerHeight); //Sets the height initially
      this.$(".fill-screen-right").css("height", window.innerHeight); //Sets the height initially
      this.$(".fill-screen-half").css("height", window.innerHeight / 1.5); //Sets the height initially
  
    }
  
    @HostListener('window:resize')
    onWindowResize() {
      this.$(".fill-screen").css("height", window.innerHeight); //Sets the height on resize of window
      this.$(".fill-screen-left").css("height", window.innerHeight); //Sets the height on resize of window
      this.$(".fill-screen-right").css("height", window.innerHeight); //Sets the height on resize of window
      this.$(".fill-screen-half").css("height", window.innerHeight / 1.5); //Sets the height initially
    
    }

}
