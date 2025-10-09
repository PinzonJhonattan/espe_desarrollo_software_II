import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { environment } from '@environments/environment';
import { Gif } from '../interfaces/gif.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private http = inject(HttpClient);
  public trendingGifs = signal<Gif[]>([]);
  public searchedGifs = signal<Gif[]>([]);
  public searchHistory = signal<string[]>([]);
  
  constructor() {
    this.loadTrendingGifs();
    this.loadSearchHistory();
  }
  
  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.urlBase}/gifs/trending`, {
      params: {
        api_key: environment.apiKey,
        limit: '40'
      }
    }).subscribe((response) => {
      const gifs= GifMapper.mapGiphyItemsToGifArray(response.data);
      this.trendingGifs.set(gifs);
      console.log(gifs);
    });
  }

  searchGifs(query: string): Observable<Gif[]> {
    return new Observable((observer) => {
      if (!query.trim()) {
        observer.next([]);
        observer.complete();
        return;
      }

      this.http.get<GiphyResponse>(`${environment.urlBase}/gifs/search`, {
        params: {
          api_key: environment.apiKey,
          q: query,
          limit: '40'
        }
      }).subscribe({
        next: (response) => {
          const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
          this.searchedGifs.set(gifs);
          this.addToSearchHistory(query);
          observer.next(gifs);
          observer.complete();
        },
        error: (error) => {
          observer.error(error);
        }
      });
    });
  }

  private addToSearchHistory(query: string) {
    const normalizedQuery = query.toLowerCase().trim();
    const currentHistory = this.searchHistory();
    
    if (!currentHistory.includes(normalizedQuery)) {
      const newHistory = [normalizedQuery, ...currentHistory].slice(0, 10);
      this.searchHistory.set(newHistory);
      this.saveSearchHistory(newHistory);
    }
  }

  private loadSearchHistory() {
    const history = localStorage.getItem('gifsSearchHistory');
    if (history) {
      this.searchHistory.set(JSON.parse(history));
    }
  }

  private saveSearchHistory(history: string[]) {
    localStorage.setItem('gifsSearchHistory', JSON.stringify(history));
  }

  clearSearchHistory() {
    this.searchHistory.set([]);
    localStorage.removeItem('gifsSearchHistory');
  }
}
