import { Component, input } from '@angular/core';

@Component({
  selector: 'gifs-gif-list-item',
  templateUrl: './gif-list-item.component.html',
  styles: ``
})
export default class GifListItemComponent {
    imageUrl = input.required<string>();    
}