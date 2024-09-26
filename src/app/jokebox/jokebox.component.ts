import { Component } from '@angular/core';
import { JokeApiService } from '../services/joke.api.service';
import { CommonModule } from '@angular/common';
import { AppState } from '../states/appstate';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount } from '../states/counter/counter.selectors';
import { incrementLaugh } from '../states/counter/counter.actions';

interface Joke {
  setup: string;
  punchline: string;
}

@Component({
  selector: 'app-joke-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jokebox.component.html',
  styleUrl: './jokebox.component.scss',
})
export class JokeBoxComponent {
  joke!: Joke;
  laughCount$: Observable<number>;

  constructor(private jokeApi: JokeApiService, private store: Store<AppState>) {
    this.laughCount$ = this.store.select(selectCount);
  }

  next() {
    this.joke = this.jokeApi.getJoke();
  }

  laugh() {
    this.store.dispatch(incrementLaugh());
  }
}
