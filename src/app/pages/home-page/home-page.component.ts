import { Component, Inject, OnInit, OnChanges, HostListener } from '@angular/core';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr} from '../../common/index';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  
  constructor(@Inject(JQ_TOKEN) private $: any, @Inject(TOASTR_TOKEN) private toastr: Toastr | Toastr) {} //The '| Toastr' is a band-aid to a bug that throws an error in the console

  ngOnInit() {


  }

  @HostListener('window:resize')
  onWindowResize() {
  
  }

}