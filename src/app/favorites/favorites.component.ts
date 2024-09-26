import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState, CollectionState, Joke } from '../states/appstate';
import { Store } from '@ngrx/store';
import { selectJokes } from '../states/favorites/favorites.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  jokes$: Observable<Joke[]>;
  JOKES: Joke[] = [];

  constructor(private store: Store<AppState>) {
    this.jokes$ = this.store.select(selectJokes);
  }
}
