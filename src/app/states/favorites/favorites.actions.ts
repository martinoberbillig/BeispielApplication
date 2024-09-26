import { createAction } from '@ngrx/store';

export const addToFavorites = createAction(
  '[Jokebox Component] add  Joke to Favoritelist'
);

export const removeFromFavorites = createAction(
  '[Favorite Card Component] remove Joke from Favoritelist'
);
