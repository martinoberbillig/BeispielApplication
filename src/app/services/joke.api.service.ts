import { Injectable } from '@angular/core';

interface Joke {
  setup: string;
  punchline: string;
}

@Injectable({
  providedIn: 'root',
})
export class JokeApiService {
  data!: Joke;

  constructor() {}

  getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((response) => response.json())
      .then((data: Joke) => {
        this.data = data;
      });
    return this.data;
  }
}
