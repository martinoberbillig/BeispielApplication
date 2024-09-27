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

  constructor(private jokeApi: JokeApiService, private store: Store<AppState>) {
    this.laughCount$ = this.store.select(selectCount);
    this.joke$ = this.jokeApi.getJoke();
  }

  next() {
    this.joke$ = this.jokeApi.getJoke();
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
