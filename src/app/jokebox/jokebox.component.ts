import { Component } from '@angular/core';
import { JokeApiService } from '../services/joke.api.service';
import { CommonModule } from '@angular/common';
import { AppState, Joke } from '../states/appstate';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount } from '../states/counter/counter.selectors';
import { incrementLaugh } from '../states/counter/counter.actions';
import { addToFavorites } from '../states/favorites/favorites.actions';
import { JokeCardComponent } from '../favorites/joke-card/joke-card.component';
import * as LoadingJokeActions from '../states/loading/loadingJoke.action';
import * as LoadingJokeSelectors from '../states/loading/loadingJoke.selector';

@Component({
  selector: 'app-joke-box',
  standalone: true,
  imports: [CommonModule, JokeCardComponent],
  templateUrl: './jokebox.component.html',
  styleUrl: './jokebox.component.scss',
})
export class JokeBoxComponent {
  joke$: Observable<Joke>;
  laughCount$: Observable<number>;
  error$: Observable<string | null>;

  constructor(private jokeApi: JokeApiService, private store: Store<AppState>) {
    this.next();
    this.laughCount$ = this.store.select(selectCount);
    this.joke$ = this.store.select(LoadingJokeSelectors.selecteJoke);
    this.error$ = this.store.select(LoadingJokeSelectors.selecteError);
  }

  next() {
    this.store.dispatch(LoadingJokeActions.loadJoke());
  }

  laugh() {
    this.store.dispatch(incrementLaugh());
  }

  addToFavs() {
    this.joke$.subscribe((obj) => {
      this.store.dispatch(addToFavorites(obj));
    });
  }
}
