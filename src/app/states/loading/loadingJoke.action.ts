import { createAction, props } from '@ngrx/store';
import { Joke } from '../appstate';

export const loadJoke = createAction('[Jokebox Component] load Joke');

export const loadJokeSuccess = createAction(
  '[Jokebox Component] load Joke success',
  props<{ joke: Joke }>()
);

export const loadJokeFailure = createAction(
  '[Jokebox Component] load Joke failure',
  props<{ errorMessage: string }>()
);
