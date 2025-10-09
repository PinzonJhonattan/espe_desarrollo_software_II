import { Component, effect, inject, signal } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import GifListComponent from '../../components/gif-list/gif-list.component';
import { Gif } from '../../interfaces/gif.interfaces';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.html',
  styles: `
    .search-container {
      max-width: 1200px;
      margin: 0 auto;
    }
  `
})
export default class SearchPage {
  private gifsService = inject(GifsService);
  
  public searchTerm = signal<string>('');
  public gifs = signal<Gif[]>([]);
  public isLoading = signal<boolean>(false);
  public showHistory = signal<boolean>(false);
  
  private searchSubject = new Subject<string>();
  
  constructor() {
    // Configurar el debounce para la búsqueda dinámica
    this.searchSubject.pipe(
      debounceTime(500), // Espera 500ms después de que el usuario deje de escribir
      distinctUntilChanged() // Solo busca si el término cambió
    ).subscribe(searchTerm => {
      this.performSearch(searchTerm);
    });
  }

  onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.searchTerm.set(value);
    this.showHistory.set(false);
    
    if (value.trim()) {
      this.isLoading.set(true);
      this.searchSubject.next(value);
    } else {
      this.gifs.set([]);
      this.isLoading.set(false);
    }
  }

  private performSearch(query: string) {
    if (!query.trim()) {
      this.gifs.set([]);
      this.isLoading.set(false);
      return;
    }

    this.gifsService.searchGifs(query).subscribe({
      next: (gifs) => {
        this.gifs.set(gifs);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error al buscar GIFs:', error);
        this.isLoading.set(false);
      }
    });
  }

  onFocus() {
    if (!this.searchTerm().trim()) {
      this.showHistory.set(true);
    }
  }

  onBlur() {
    // Pequeño delay para permitir el click en el historial
    setTimeout(() => {
      this.showHistory.set(false);
    }, 200);
  }

  selectFromHistory(term: string) {
    this.searchTerm.set(term);
    this.showHistory.set(false);
    this.isLoading.set(true);
    this.performSearch(term);
  }

  clearHistory() {
    this.gifsService.clearSearchHistory();
  }

  get searchHistory() {
    return this.gifsService.searchHistory();
  }
}
