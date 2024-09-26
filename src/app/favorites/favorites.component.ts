import { Component } from '@angular/core';
import { FavoriteCardComponent } from './favorite-card/favorite-card.component';
import { CommonModule } from '@angular/common';
import { AppState, Joke } from '../states/appstate';
import { Store } from '@ngrx/store';
import { selectFavoriteList } from '../states/favorites/favorites.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [FavoriteCardComponent, CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  jokes$: Observable<Joke[]>;
  JOKES: Joke[] = [];

  constructor(private store: Store<AppState>) {
    this.jokes$ = this.store.select(selectFavoriteList);
  }

  click() {
    console.log(
      this.jokes$.subscribe((jokes) => {
        this.JOKES = jokes;
        console.log(this.JOKES[0]);
      })
    );
  }
}
