import { Injectable } from '@angular/core';
import { Joke } from '../states/appstate';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokeApiService {
  data!: Observable<Joke>;

  constructor() {}

  getJoke(): Observable<Joke> {
    return from(
      fetch('https://official-joke-api.appspot.com/random_joke').then(
        (response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        }
      )
    );
  }
}
