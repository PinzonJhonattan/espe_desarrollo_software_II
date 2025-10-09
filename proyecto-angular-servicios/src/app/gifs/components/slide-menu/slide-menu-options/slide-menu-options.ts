import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption {
  label: string;
  subLabel: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'gifs-slide-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './slide-menu-options.html',
  styles: ``
})
export default class SlideMenuOptions {
  menuOptions: MenuOption[] = [
    {
      label: 'Trending',
      subLabel: 'Gifs Populares',
      icon: 'fa-solid fa-chart-line',
      route: '/dashboard/trending'
    },
    {
      label: 'Search',
      subLabel: 'Buscar Gifs',
      icon: 'fa-solid fa-magnifying-glass',
      route: '/dashboard/search'
    }
  ];
}
