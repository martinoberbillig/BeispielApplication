import { Component, Input } from '@angular/core';
import { AppState, Joke } from '../../states/appstate';
import { Store } from '@ngrx/store';
import { removeFromFavorites } from '../../states/favorites/favorites.actions';

@Component({
  selector: 'app-joke-card',
  standalone: true,
  imports: [],
  templateUrl: './joke-card.component.html',
  styleUrl: './joke-card.component.scss',
})
export class JokeCardComponent {
  @Input() joke!: Joke;

  constructor(private store: Store<AppState>) {}

  remove() {
    this.store.dispatch(removeFromFavorites(this.joke));
  }
}
