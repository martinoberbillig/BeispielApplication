import { createAction, props } from '@ngrx/store';
import { Joke } from '../appstate';

export const addToFavorites = createAction(
  '[Jokebox Component] add  Joke to Favoritelist',
  props<Joke>()
);

export const removeFromFavorites = createAction(
  '[Favorite Card Component] remove Joke from Favoritelist',
  props<Joke>()
);
