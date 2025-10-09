import { Component, input } from '@angular/core';
import GifListItemComponent from './gif-list-item/gif-list-item.component';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-gif-list',
  templateUrl: './gif-list.component.html',
  styles: ``,
  imports: [GifListItemComponent]
})
export default class GifListComponent {
  gifs = input.required<Gif[]>();

}    