import { Component } from '@angular/core';
import SlideMenuHeader from './slide-menu-header/slide-menu-header';
import SlideMenuOptions from './slide-menu-options/slide-menu-options';

@Component({
  selector: 'gifs-slide-menu',
  imports: [SlideMenuHeader, SlideMenuOptions],
  templateUrl: './slide-menu.html',
  styles: ``
})
export default class SlideMenu {

}
