import { Component } from '@angular/core';
import { environment } from '@environments/environment';  

@Component({
  selector: 'gifs-slide-menu-header',
  imports: [],
  templateUrl: './slide-menu-header.html',
  styles: ``
})
export default class SlideMenuHeader {
  envs = environment;
}
