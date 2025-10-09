import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import SlideMenu from '../../components/slide-menu/slide-menu';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, SlideMenu],
  templateUrl: './dashboard-page.html',
  styles: ``
})
export default class DashboardPage {

}
